const OrganisersHomePage = ({ organisersList }) => {
  const formattedOrganisers = organisersList.map((company) => {
    return (
      <li key={company.id}>
        <h2>{company.name}</h2>
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
