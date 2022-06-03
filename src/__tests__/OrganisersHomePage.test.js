import { render, screen } from "@testing-library/react";
import OrganisersHomePage from "../components/OrganisersHomePage";
import userEvent from "@testing-library/user-event";

const organiser = [{ id: 26391, name: "Great Run" }];

const organiserList = [
  { id: 26391, name: "Great Run" },
  { id: 69173, name: "RunThrough" },
  { id: 154979, name: "Limelight Sports Club" },
];

test("renders the header", () => {
  render(<OrganisersHomePage organisersList={organiser} />);
  const title = screen.getByText("List Of All Organisers");
  expect(title).toBeInTheDocument();
});

test("renders one organiser when only one data entry", () => {
  render(<OrganisersHomePage organisersList={organiser} />);
  const startListEntries = screen.getAllByRole("listitem");
  expect(startListEntries.length).toBe(1);
});

test("renders multiple organisers when 3 organisers passed through props", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const startListEntries = screen.getAllByRole("listitem");
  expect(startListEntries.length).toBe(3);
});

test("multiple organisers are found on page", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const greatRun = screen.getByText("Great Run");
  const runThrough = screen.getByText("RunThrough");
  const limelight = screen.getByText("Limelight Sports Club");

  expect(greatRun).toBeInTheDocument();
  expect(runThrough).toBeInTheDocument();
  expect(limelight).toBeInTheDocument();
});

test("href testing for all organisers", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const greatRun = screen.getByText("Great Run");
  const runThrough = screen.getByText("RunThrough");
  const limelight = screen.getByText("Limelight Sports Club");

  userEvent.click(greatRun);

  expect(greatRun.closest("a")).toHaveAttribute("href", "/organiser/26391");
  expect(runThrough.closest("a")).toHaveAttribute("href", "/organiser/69173");
  expect(limelight.closest("a")).toHaveAttribute("href", "/organiser/154979");
});
