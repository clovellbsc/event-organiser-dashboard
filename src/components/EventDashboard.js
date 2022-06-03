import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StartListEntry from "./StartListEntry";
import TicketTotal from "./TicketTotal";
import "../styling/EventDashboard.css";

const EventDashboard = ({ data }) => {
  const { eventId } = useParams();
  const [eventName, setEventName] = useState();

  const filterDataByEvent = () => {
    return data.filter((entry) => String(entry["eventId"]) === eventId);
  };

  const entriesByOrganiser = () => {
    const organiserSpecificData = filterDataByEvent();
    return organiserSpecificData.map((entry, index) => (
      <li key={index}>
        <StartListEntry startListEntry={entry} />
      </li>
    ));
  };

  useEffect(() => {
    const eventData = filterDataByEvent();
    const singleEntry = eventData[0];
    setEventName(singleEntry["eventTitle"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-screen centre">
      <div>
        <h2>Start List Entries for {eventName}</h2>
      </div>
      <div>
        <TicketTotal dataFilter={filterDataByEvent()} />
      </div>
      <div className="card-container">
        <ul>{entriesByOrganiser()}</ul>
      </div>
    </div>
  );
};

export default EventDashboard;
