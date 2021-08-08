import { render } from "@testing-library/react";
import ImageCard from "./imageCard";

const title = "Sports!";
const imageurl = "";

it("matches snapshot", () => {
  const { asFragment } = render(
    <ImageCard title={title} imageurl={imageurl} />
  );
  expect(asFragment()).toMatchSnapshot();
});
