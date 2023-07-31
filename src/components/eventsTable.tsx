import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

const EventsTable = ({
  caption,
  highlightOnHover,
  size,
  variation,
  events,
  onEditEventClick,
  onDeleteEventClick,
}) => {
  return (
    <Table
      caption={caption}
      highlightOnHover={highlightOnHover}
      size={size}
      variation={variation}
    >
      <TableHead>
        <TableRow>
          <TableCell as="th">S.No.</TableCell>
          <TableCell as="th">Country</TableCell>
          <TableCell as="th">City</TableCell>
          <TableCell as="th">Venue</TableCell>
          <TableCell as="th">Address 1</TableCell>
          <TableCell as="th">Address 2</TableCell>
          <TableCell as="th">Date</TableCell>
          <TableCell as="th">Phone</TableCell>
          <TableCell as="th">Time</TableCell>
          <TableCell as="th"></TableCell>
          <TableCell as="th"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {
        events.map(({id, country, city, venue, address1, address2, startDate, endDate, phone, time}, i) => (<TableRow key={id}>
          <TableCell>{i + 1}</TableCell>
          <TableCell>{country}</TableCell>
          <TableCell>{city}</TableCell>
          <TableCell>{venue}</TableCell>
          <TableCell>{address1}</TableCell>
          <TableCell>{address2}</TableCell>
          <TableCell>{startDate} - {endDate}</TableCell>
          <TableCell>{phone}</TableCell>
          <TableCell>{time}</TableCell>
          <TableCell><button id={id} onClick={onEditEventClick}>Edit</button></TableCell>
          <TableCell><button id={id} onClick={onDeleteEventClick}>Delete</button></TableCell>
        </TableRow>))
      }
      </TableBody>
    </Table>
  );
}

export default EventsTable;