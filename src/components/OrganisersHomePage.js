import React, { useState, useEffect } from "react";

const OrganisersHomePage = ({ organisersList }) => {
  const formattedOrganisers = organisersList.map((company) => {
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
      <div className="events header">
        <h3>List Of All Organisers</h3>
      </div>
      <div className="card-container">
        <ul>{formattedOrganisers}</ul>
      </div>
    </div>
  );
};

export default OrganisersHomePage;
