import React, { useState, useEffect } from "react";

const OrganisersHomePage = ({ organisersList }) => {
  const [organisers, setOrganisers] = useState([]);
  const [organiser, setOrganiser] = useState("");

  const handleChange = (event) => {
    setOrganiser(event.target.value);
  };

  useEffect(() => {
    const companies = organisersList.filter((entry) =>
      entry.name.toLowerCase().includes(organiser.toLowerCase())
    );
    setOrganisers(companies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organiser]);

  const formattedOrganisers = organisers.map((company) => {
    const url = `/organiser/${company.id}`;
    return (
      <li key={company.id}>
        <a href={url}>
          <h2>{company.name}</h2>
        </a>
      </li>
    );
  });

  return (
    <div className="home-screen">
      <div className="searchbar">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter the name of the event organiser"
        />
      </div>
      <div className="events header">
        {organiser ? (
          <h3>Start List Entries Based On Organiser Matching "{organiser}" </h3>
        ) : (
          <h3>List Of All Organisers</h3>
        )}
      </div>
      <div className="card-container">
        <ul>{formattedOrganisers}</ul>
      </div>
    </div>
  );
};

export default OrganisersHomePage;
