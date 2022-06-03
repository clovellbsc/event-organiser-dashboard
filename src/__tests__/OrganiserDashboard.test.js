import { render, screen } from "@testing-library/react";
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

test("renders the header", () => {
  render(<OrganiserDashboard data={data} organisersList={organiserList} />);
  const title = screen.getByText("Start List Entries for Great Run");
  expect(title).toBeInTheDocument();
});
