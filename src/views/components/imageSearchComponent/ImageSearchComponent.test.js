import { render, screen } from "@testing-library/react";
import ImageSearchComponent from "./imageSearchComponent";

const data = [];

it("matches snapshot", () => {
  const { asFragment } = render(<ImageSearchComponent ImageList={data} />);
  expect(asFragment()).toMatchSnapshot();
});
