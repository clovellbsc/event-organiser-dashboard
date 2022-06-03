import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TicketTotal from "./TicketTotal";

const EventDashboard = ({ data }) => {
  const { eventId } = useParams();
  const [eventName, setEventName] = useState();

  const filterDataByEvent = () => {
    return data.filter((entry) => String(entry["eventId"]) === eventId);
  };

  useEffect(() => {
    const eventData = filterDataByEvent();
    const singleEntry = eventData[0];
    setEventName(singleEntry["eventTitle"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-screen">
      <div>
        <h2>Start List Entries for {eventName}</h2>
      </div>
      <div>
        <TicketTotal dataFilter={filterDataByEvent()} />
      </div>
    </div>
  );
};

export default EventDashboard;
