import { render, screen } from "@testing-library/react";
import Header from "./appHeader";

test("renders learn react link", () => {
  render(<Header />);
  const text = screen.getByText(/Image Search Engine/i);
  expect(text).toBeInTheDocument();
});
