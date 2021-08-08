import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getImageSearchList } from "../../../redux/actions/image-search/imageSearchActions";
import ImageSearchComponent from "../../components/imageSearchComponent/imageSearchComponent";
import SearchComponent from "../../components/search/searchComponent";
import Error from "../../components/Error/errorComponent";

const styles = (theme) => ({
  wrapper: {
    position: "relative",
  },
  container: {
    padding: "25px",
  },
  spinner: {
    padding: "20px",
    marginTop: "200px",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
});

/**
 * Component Search, Main Component where start app Image-search
 * @constant
 * @type {function}
 * @returns {JSX}
 */

const ImageSearch = (props) => {
  const {
    classes,
    //Action methods
    getImageSearchList,
    //Data
    searchImageList,
    isLoading,
    searchImageListError,
  } = props;

  /**
   * useState is a function to define data for component
   * @type {function}
   * @return {Object}
   */
  const [ImageList, setImageList] = useState([]);
  const [state, setState] = useState({
    Color: "",
    ImgType: "",
    Category: "",
    Number: "",
  });

  //Handle change function
  const handlImageSearch = (event) => {
    let { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    getImageSearchList(state);
  };

  /**
   * useEffect is function run after render component on Mount procces
   * @type {function}
   * @return {function}
   */
  useEffect(() => {
    getImageSearchList(state);
  }, []);

  useEffect(() => {
    if (searchImageList !== undefined && searchImageList.length > 0) {
      setImageList(searchImageList);
    }
  }, [searchImageList]);

  return (
    <>
      <div className={classes.container}>
        <div>
          <SearchComponent
            state={state}
            handleSubmit={handleSubmit}
            handleChange={handlImageSearch}
            isLoading={isLoading}
          />
        </div>
        {isLoading ? (
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        ) : (
          <>
            {!searchImageListError ? (
              <ImageSearchComponent ImageList={ImageList} />
            ) : (
              <Error text="Error while fetiching images!" />
            )}
          </>
        )}
      </div>
    </>
  );
};

/**
 * Data states from store
 * @constants
 * @type {object} data
 */
const mapStateToProps = (state) => ({
  searchImageList: state.ImageSearch.searchImageList,
  isLoading: state.ImageSearch.isLoading,
  searchImageListError: state.ImageSearch.searchImageListError,
});

export default connect(mapStateToProps, { getImageSearchList })(
  withStyles(styles, { withTheme: true })(ImageSearch)
);
