import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Event as EventsModel } from '../models';
import { ThemeProvider, Flex, View } from '@aws-amplify/ui-react';
import EventsTable from '../components/eventsTable';
import { EventCreateForm, EventUpdateForm } from '../ui-components';
import '@aws-amplify/ui-react/styles.css';
import styles from '../styles/Home.module.css';

export default function EventsPage({ signOut }) {
  const [events, setEvents] = useState([]);
  const [editEventId, setEditEventId] = useState(null);

  const getEvents = async () => {
    const _events: any = await DataStore.query(EventsModel);
    setEvents(_events);
  };

  const onEditEventClick = (ev) => {
    setEditEventId(ev.currentTarget.id);
  }

  const onEventUpdateSuccess = (ev) => {
    getEvents();
    setEditEventId(null);
  }

  useEffect(() => {
    getEvents();
  }, []);

  

  const onDeleteEventClick = async (ev) => {
    const toDelete: any = await DataStore.query(EventsModel, ev.currentTarget.id);
    DataStore.delete(toDelete);
    getEvents();
  }

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>List of Events</h1>
          <Flex direction={{ base: 'column', large: 'row' }}>
            <View>
              {/*
              // @ts-ignore */}
              <EventsTable events={events} onEditEventClick={onEditEventClick} onDeleteEventClick={onDeleteEventClick} signOut={signOut} />
            </View>
          </Flex>

          {editEventId ?
          (
            <>
              <h3>Edit Event</h3>
              <EventUpdateForm id={editEventId} onSuccess={onEventUpdateSuccess} />
            </>
          )
          : (
            <>
              <h3>Add Event</h3>
              <EventCreateForm onSuccess={getEvents} />
            </>
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}
