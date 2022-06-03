import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div className="home-screen">
      <h2>Start List Entries for {organiser}</h2>
    </div>
  );
};

export default OrganiserDashboard;
