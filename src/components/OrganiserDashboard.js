import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TicketTotal from "./TicketTotal";
import "../styling/OrganiserDashboard.css";

const OrganiserDashboard = ({ data, organisersList }) => {
  const { organiserId } = useParams();
  const [organiser, setOrganiser] = useState();

  useEffect(() => {
    const organiserObject = organisersList.find(
      (organiser) => String(organiser.id) === organiserId
    );
    setOrganiser(organiserObject.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterDataByOrganiser = () => {
    return data.filter((entry) => String(entry["organiserId"]) === organiserId);
  };

  const allEventsByOrganiser = () => {
    const dataFilteredByOrganiser = filterDataByOrganiser();
    const eventArray = dataFilteredByOrganiser.map((entry) => {
      return { id: entry["eventId"], name: entry["eventTitle"] };
    });
    return uniqueObjectArray(eventArray);
  };

  const uniqueObjectArray = (array) => {
    return array.filter(
      (value, index, self) =>
        index ===
        self.findIndex((obj) => obj.id === value.id && obj.name === value.name)
    );
  };

  const entriesByOrganiser = () => {
    const organiserSpecificData = allEventsByOrganiser();
    return organiserSpecificData.map((entry, index) => {
      const url = `/event/${entry.id}`;
      return (
        <li key={index}>
          <a href={url}>
            <h2>{entry.name}</h2>
          </a>
        </li>
      );
    });
  };

  return (
    <div className="home-screen centre">
      <div>Start List Entries for {organiser}</div>
      <div>
        <TicketTotal dataFilter={filterDataByOrganiser()} />
      </div>
      <div className="events header">
        <h3>List Of All Events</h3>
      </div>
      <div className="card-container">
        <ul>{entriesByOrganiser()}</ul>
      </div>
    </div>
  );
};

export default OrganiserDashboard;
