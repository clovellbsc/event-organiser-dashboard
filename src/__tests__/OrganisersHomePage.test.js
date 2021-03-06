/* eslint-disable testing-library/no-node-access */
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

test("renders a searchbar", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const searchbar = screen.getByPlaceholderText(
    "Enter the name of the event organiser"
  );

  expect(searchbar).toBeInTheDocument();
});

test("when an organiser is typed, it is found on the page but others aren't", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const searchbar = screen.getByPlaceholderText(
    "Enter the name of the event organiser"
  );

  const greatRun = screen.getByText("Great Run");
  const runThrough = screen.getByText("RunThrough");
  const limelight = screen.getByText("Limelight Sports Club");

  userEvent.type(searchbar, "Great Run");

  expect(greatRun).toBeInTheDocument();
  expect(runThrough).not.toBeInTheDocument();
  expect(limelight).not.toBeInTheDocument();
});

test("searching is not case-sensitive", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const searchbar = screen.getByPlaceholderText(
    "Enter the name of the event organiser"
  );

  const greatRun = screen.getByText("Great Run");
  const runThrough = screen.getByText("RunThrough");
  const limelight = screen.getByText("Limelight Sports Club");

  userEvent.type(searchbar, "great run");

  expect(greatRun).toBeInTheDocument();
  expect(runThrough).not.toBeInTheDocument();
  expect(limelight).not.toBeInTheDocument();
});

test("searching returns partial matches", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const searchbar = screen.getByPlaceholderText(
    "Enter the name of the event organiser"
  );

  const greatRun = screen.getByText("Great Run");
  const runThrough = screen.getByText("RunThrough");
  const limelight = screen.getByText("Limelight Sports Club");

  userEvent.type(searchbar, "run");

  expect(greatRun).toBeInTheDocument();
  expect(runThrough).toBeInTheDocument();
  expect(limelight).not.toBeInTheDocument();
});

test("href testing for all organisers", () => {
  render(<OrganisersHomePage organisersList={organiserList} />);
  const greatRun = screen.getByText("Great Run");
  const runThrough = screen.getByText("RunThrough");
  const limelight = screen.getByText("Limelight Sports Club");

  expect(greatRun.closest("a")).toHaveAttribute("href", "/organiser/26391");
  expect(runThrough.closest("a")).toHaveAttribute("href", "/organiser/69173");
  expect(limelight.closest("a")).toHaveAttribute("href", "/organiser/154979");
});
