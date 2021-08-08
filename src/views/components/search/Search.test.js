import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchComponent from "./searchComponent";

const state = {
  Color: "",
  ImgType: "",
  Category: "",
  Number: "",
};
const isLoading = false;
const handleSubmit = () => {};
const handlImageSearch = () => {};
const ImageList = [];
it("matches snapshot", () => {
  const { asFragment } = render(
    <SearchComponent
      state={state.Color}
      handleSubmit={handleSubmit}
      handleChange={handlImageSearch}
      isLoading={isLoading}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Trigger search button", () => {
  render(<SearchComponent />);
  const buttonEl = screen.getByText(/Search/i);
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/Search/i);
});
