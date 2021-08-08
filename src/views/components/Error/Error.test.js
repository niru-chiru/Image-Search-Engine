import { render } from "@testing-library/react";
import Error from "./errorComponent";

const text = "Error while fetiching images!";

it("matches snapshot", () => {
  const { asFragment } = render(<Error text={text} />);
  expect(asFragment()).toMatchSnapshot();
});
