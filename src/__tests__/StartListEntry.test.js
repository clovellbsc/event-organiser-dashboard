import { render, screen } from "@testing-library/react";
import StartListEntry from "../components/StartListEntry.js";

const startListEntry = {
  emailAddress: "chris@example.com",
  firstName: "Chris",
  lastName: "Lovell",
  status: "CONFIRMED",
  eventTitle: "The Great North Run",
  raceId: "jKm3jv",
  raceStartDate: "2022-09-12T09:00:00.000Z",
  raceTitle: "Half Marathon",
  ticketPrice: {
    value: 4300,
  },
  ticketId: "8907393302",
  ticketTitle: "Standard Entry",
};

test("renders the header", () => {
  render(<StartListEntry startListEntry={startListEntry} />);
  const title = screen.getByText("The Great North Run");
  expect(title).toBeInTheDocument();
});

test("renders the runner's details", () => {
  render(<StartListEntry startListEntry={startListEntry} />);

  const runnerHeader = screen.getByText("Runner Details");
  const firstName = screen.getByText("First Name: Chris");
  const lastName = screen.getByText("Last Name: Lovell");
  const emailAddress = screen.getByText("Email Address: chris@example.com");

  expect(runnerHeader).toBeInTheDocument();
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(emailAddress).toBeInTheDocument();
});

test("renders the event details", () => {
  render(<StartListEntry startListEntry={startListEntry} />);

  const eventHeader = screen.getByText("Event Details");
  const raceId = screen.getByText("Race ID: jKm3jv");
  const raceStartDate = screen.getByText(
    "Race Date/Time: Monday, September 12, 2022 10:00 AM"
  );
  const ticketType = screen.getByText("Ticket Type: Standard Entry");
  const ticketId = screen.getByText("Ticket ID: 8907393302");

  expect(eventHeader).toBeInTheDocument();
  expect(raceId).toBeInTheDocument();
  expect(raceStartDate).toBeInTheDocument();
  expect(ticketType).toBeInTheDocument();
  expect(ticketId).toBeInTheDocument();
});

test("renders the ticket details", () => {
  render(<StartListEntry startListEntry={startListEntry} />);

  const ticketHeader = screen.getByText("Ticket Details");
  const status = screen.getByText("Status: CONFIRMED");
  const ticketPrice = screen.getByText("Ticket Price: £4300");

  expect(ticketHeader).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(ticketPrice).toBeInTheDocument();
});
