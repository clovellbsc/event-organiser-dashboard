import { render, screen } from "@testing-library/react";
import TicketTotal from "../components/TicketTotal";

const singleData = [
  {
    status: "CONFIRMED",
    ticketPrice: {
      value: 1000,
    },
  },
];

const unconfirmedSingleData = [
  {
    status: "PENDING",
    ticketPrice: {
      value: 1000,
    },
  },
];

const dataAllConfirmed = [
  {
    status: "CONFIRMED",
    ticketPrice: {
      value: 1000,
    },
  },
  {
    status: "CONFIRMED",
    ticketPrice: {
      value: 2000,
    },
  },
];

const data = [
  {
    status: "CONFIRMED",
    ticketPrice: {
      value: 1000,
    },
  },
  {
    status: "PENDING",
    ticketPrice: {
      value: 2000,
    },
  },
];

test("renders the total of ticket sales", () => {
  render(<TicketTotal dataFilter={singleData} />);
  const totalTicketSales = screen.getByText("Total Ticket Sales: £1000");
  expect(totalTicketSales).toBeInTheDocument();
});

test("renders the total tickets by totalling all values when all entries status = CONFIRMED", () => {
  render(<TicketTotal dataFilter={dataAllConfirmed} />);
  const totalTicketSales = screen.getByText("Total Ticket Sales: £3000");
  expect(totalTicketSales).toBeInTheDocument();
});

test("renders the total tickets by totalling all values without including PENDING status", () => {
  render(<TicketTotal dataFilter={data} />);
  const totalTicketSales = screen.getByText("Total Ticket Sales: £1000");
  expect(totalTicketSales).toBeInTheDocument();
});

test("renders the total with £0 when no confirmed bookings", () => {
  render(<TicketTotal dataFilter={unconfirmedSingleData} />);
  const totalTicketSales = screen.getByText("Total Ticket Sales: £0");
  expect(totalTicketSales).toBeInTheDocument();
});
