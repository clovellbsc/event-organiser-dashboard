const TicketTotal = ({ dataFilter }) => {
  const findConfirmedEntries = () => {
    return dataFilter.filter((entry) => entry["status"] === "CONFIRMED");
  };

  const arrayOfTicketValues = (entries) => {
    return entries.map((entry) => Number(entry["ticketPrice"]["value"]));
  };

  const sumValues = (arrayOfValues) => {
    return arrayOfValues.reduce((total, entry) => {
      return total + entry;
    });
  };

  const calculateTicketTotal = () => {
    const confirmedEntries = findConfirmedEntries();
    const ticketValues = arrayOfTicketValues(confirmedEntries);
    return ticketValues.length ? sumValues(ticketValues) : 0;
  };

  return (
    <div>
      <h3>Total Ticket Sales: £{calculateTicketTotal()}</h3>
    </div>
  );
};

export default TicketTotal;
