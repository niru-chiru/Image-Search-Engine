import React from "react";
import { render } from "@testing-library/react";
import ImageSearchContainer from "./imageSearchContainer";
import SearchComponent from "../../components/search/searchComponent";
import ImageSearchComponent from "../../components/imageSearchComponent/imageSearchComponent";

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
    <ImageSearchContainer>
      <SearchComponent
        state={state}
        handleSubmit={handleSubmit}
        handleChange={handlImageSearch}
        isLoading={isLoading}
      />
      <ImageSearchComponent ImageList={ImageList} />
    </ImageSearchContainer>
  );
  expect(asFragment()).toMatchSnapshot();
});
