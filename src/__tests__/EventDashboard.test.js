import { render, screen } from "@testing-library/react";
import EventDashboard from "../components/EventDashboard";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    eventId: "18414",
  }),
}));

const data = [
  {
    id: "61a8da5719f642320668e667",
    bookingDate: "2021-12-02T14:38:15.688Z",
    emailAddress: "asdf@asdf.asdf",
    firstName: "asfdg",
    lastName: "aasdf",
    status: "CONFIRMED",
    eventId: 18414,
    eventTitle: "The Great North Run",
    organiserTitle: "Great Run",
    organiserId: 26391,
    raceId: "jKm3jv",
    raceStartDate: "2022-09-12T09:00:00.000Z",
    raceTitle: "Half Marathon",
    ticketPrice: {
      originalValue: 4300,
      value: 4300,
      fee: 0,
      currencyCode: "GBP",
    },
    ticketId: "8907393302",
    ticketTitle: "Standard Entry",
  },
];

const multipleData = [
  {
    id: "61a8da5719f642320668e667",
    bookingDate: "2021-12-02T14:38:15.688Z",
    emailAddress: "asdf@asdf.asdf",
    firstName: "asfdg",
    lastName: "aasdf",
    status: "CONFIRMED",
    eventId: 18414,
    eventTitle: "The Great North Run",
    organiserTitle: "Great Run",
    organiserId: 26391,
    raceId: "jKm3jv",
    raceStartDate: "2022-09-12T09:00:00.000Z",
    raceTitle: "Half Marathon",
    ticketPrice: {
      originalValue: 4300,
      value: 4300,
      fee: 0,
      currencyCode: "GBP",
    },
    ticketId: "8907393302",
    ticketTitle: "Standard Entry",
  },
  {
    id: "624b1c72aceef16d23c04de5",
    bookingDate: "2022-04-04T16:27:30.170Z",
    emailAddress: "stephen.cook@example.com",
    firstName: "stephen",
    lastName: "cook",
    status: "CONFIRMED",
    eventId: 18414,
    eventTitle: "The Great North Run",
    organiserTitle: "Great Run",
    organiserId: 26391,
    raceId: "jKm3jv",
    raceStartDate: "2022-09-12T09:00:00.000Z",
    raceTitle: "Half Marathon",
    ticketPrice: {
      originalValue: 4300,
      value: 4300,
      fee: 0,
      currencyCode: "GBP",
    },
    ticketId: "0434147382",
    ticketTitle: "Standard Entry",
  },
];

test("renders the header", () => {
  render(<EventDashboard data={data} />);
  const title = screen.getByText("Start List Entries for The Great North Run");
  expect(title).toBeInTheDocument();
});

test("renders the ticket total", () => {
  render(<EventDashboard data={data} />);
  const total = screen.getByText("Total Ticket Sales: £4300");
  expect(total).toBeInTheDocument();
});
