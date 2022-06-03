import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrganiserDashboard from "../components/OrganiserDashboard";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    organiserId: "26391",
  }),
}));

const organiserList = [
  { id: 26391, name: "Great Run" },
  { id: 69173, name: "RunThrough" },
  { id: 154979, name: "Limelight Sports Club" },
];

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

const multipleEventData = [
  {
    id: "61a09c5c19f6423206d4562e",
    bookingDate: "2021-11-26T08:35:40.586Z",
    emailAddress: "tharin@example.com",
    firstName: "tharin ",
    lastName: "de silva",
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
    id: "622a038c8ccb5b70ba16eea1",
    bookingDate: "2022-03-10T13:56:28.096Z",
    emailAddress: "fdgh@fgh.ghg",
    firstName: "dsfgh",
    lastName: "sfgh",
    status: "CONFIRMED",
    eventId: 11120243,
    eventTitle: "Great Manchester Run",
    organiserTitle: "Great Run",
    organiserId: 26391,
    raceId: "3713336213",
    raceStartDate: "2023-05-20T23:00:00.000Z",
    raceTitle: "Half Marathon - Sunday",
    ticketPrice: {
      originalValue: 4900,
      value: 4900,
      fee: 0,
      currencyCode: "GBP",
    },
    ticketId: "8352394668",
    ticketTitle: "Standard Entry",
  },
];

test("renders the header", () => {
  render(<OrganiserDashboard data={data} organisersList={organiserList} />);
  const title = screen.getByText("Start List Entries for Great Run");
  expect(title).toBeInTheDocument();
});

test("renders one event when only one data entry", () => {
  render(<OrganiserDashboard data={data} organisersList={organiserList} />);
  const startListEntries = screen.getAllByRole("listitem");
  expect(startListEntries.length).toBe(1);
});

test("renders one event when two data entries with the same event", () => {
  render(
    <OrganiserDashboard data={multipleData} organisersList={organiserList} />
  );
  const startListEntries = screen.getAllByRole("listitem");
  expect(startListEntries.length).toBe(1);
});

test("renders multiple organisers when two data entries with different organisers", () => {
  render(
    <OrganiserDashboard
      data={multipleEventData}
      organisersList={organiserList}
    />
  );
  const startListEntries = screen.getAllByRole("listitem");
  expect(startListEntries.length).toBe(2);
});

test("href testing for all organisers", () => {
  render(
    <OrganiserDashboard
      data={multipleEventData}
      organisersList={organiserList}
    />
  );
  const greatNorthRun = screen.getByText("The Great North Run");
  const greatManchesterRun = screen.getByText("Great Manchester Run");

  expect(greatNorthRun.closest("a")).toHaveAttribute("href", "/event/18414");
  expect(greatManchesterRun.closest("a")).toHaveAttribute(
    "href",
    "/event/11120243"
  );
});
