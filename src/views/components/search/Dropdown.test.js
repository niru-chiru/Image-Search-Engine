import { render, screen } from "@testing-library/react";
import DropdownComponent from "./dropdownCompnent";

const label = "Test";
const data = [];
const name = "Test";
const state = {
  Color: "",
  ImgType: "",
  Category: "",
  Number: "",
};
const handleChange = () => {};
it("matches snapshot of dropdown component", () => {
  const { asFragment } = render(
    <DropdownComponent
      handleChange={handleChange}
      label={label}
      data={data}
      name={name}
      value={state.Color}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
