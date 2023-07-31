import { ThemeProvider, Flex, View } from '@aws-amplify/ui-react';
import EventsTable from '../components/eventsTable';
import '@aws-amplify/ui-react/styles.css';
import styles from '../styles/Home.module.css';

// hard-coded events to be fetched from API
const events = [
  {
    "country": "UK",
    "city": "Southall",
    "venue": "Gurdwara Sri Guru Singh Sabha",
    "address1": "Guru Nanak Rd",
    "address2": "Southall UB2 4NP",
    "startDate": "31st July",
    "endDate": "6th Aug",
    "phone": "07967005629, 07813674720",
    "time": "4 - 6 am",
    "seq": "1",
    "id": "1"
  },
  {
    "country": "UK",
    "city": "Slough",
    "venue": "Gurdwara Sri Guru Singh Sabha",
    "address1": "Sheehy Way",
    "address2": "Berkshire, Slough SL2 5SS",
    "startDate": "7th",
    "endDate": "13th Aug",
    "phone": "07967005629, 07813674720",
    "time": "4 - 6 am",
    "seq": "2",
    "id": "2"
  },
  {
    "country": "UK",
    "city": "Walsall",
    "venue": "Guru Nanak Gurdwara Sahib",
    "address1": "162 W Bromwich St",
    "address2": "Walsall WS1 4DE",
    "startDate": "14th",
    "endDate": "20th Aug",
    "phone": "07967005629, 07813674720",
    "time": "4 - 6 am",
    "seq": "3",
    "id": "3"
  },
  {
    "country": "UK",
    "city": "Smethwick",
    "venue": "Guru Nanak Gurdwara Sahib",
    "address1": "130 High St",
    "address2": "Smethwick B66 3AP",
    "startDate": "21st",
    "endDate": "27th Aug",
    "phone": "07967005629, 07813674720",
    "time": "4 - 6 am",
    "seq": "4",
    "id": "4"
  },
];

export default function EventsPage() {

  const onEditEventClick = () => {}

  const onDeleteEventClick = () => {}

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>List of Events</h1>
          <Flex direction={{ base: 'column', large: 'row' }}>
            <View>
              {/*
              // @ts-ignore */}
              <EventsTable events={events} onEditEventClick={onEditEventClick} onDeleteEventClick={onDeleteEventClick} />
            </View>
          </Flex>
        </main>
      </div>
    </ThemeProvider>
  )
}
