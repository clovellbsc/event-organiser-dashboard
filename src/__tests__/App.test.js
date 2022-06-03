import App from "../components/App.js";
import { render, screen } from "@testing-library/react";

test("renders header", () => {
  render(<App />);
  const header = screen.getByText("Let's Do This Event Management");
  expect(header).toBeInTheDocument();
});
