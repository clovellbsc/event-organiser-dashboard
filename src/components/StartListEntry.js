import moment from "moment";
import "../styling/startListEntry.css";

const StartListEntry = ({ startListEntry }) => {
  const formatDate = (date) => moment(date).format("LLLL");

  return (
    <div className="container">
      <div className="header">
        <h3>{startListEntry["eventTitle"]}</h3>
      </div>
      <div className="body">
        <div className="runner-details">
          <h4>Runner Details</h4>
          <p> First Name: {startListEntry["firstName"]} </p>
          <p> Last Name: {startListEntry["lastName"]} </p>
          <p> Email Address: {startListEntry["emailAddress"]} </p>
        </div>
        <div className="event-details">
          <h4>Event Details</h4>
          <p> Race: {startListEntry["raceTitle"]} </p>
          <p> Race ID: {startListEntry["raceId"]} </p>
          <p> Race Date/Time: {formatDate(startListEntry["raceStartDate"])} </p>
          <p> Ticket Type: {startListEntry["ticketTitle"]} </p>
          <p> Ticket ID: {startListEntry["ticketId"]} </p>
        </div>
      </div>
      <div className="ticket-details">
        <div className="ticket-header">
          <h4>Ticket Details</h4>
        </div>
        <div className="ticket-body">
          <p> Status: {startListEntry["status"]} </p>
          <p> Ticket Price: £{startListEntry["ticketPrice"]["value"]} </p>
        </div>
      </div>
    </div>
  );
};

export default StartListEntry;
