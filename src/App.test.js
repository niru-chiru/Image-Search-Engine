import { render } from "@testing-library/react";
import App from "./App";

test("renders application components", () => {
  const element = render(<App />);
  expect(element).toBeInTheDocument();
});
