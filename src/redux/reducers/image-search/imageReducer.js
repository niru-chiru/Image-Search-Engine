import {
  GET_IMAGES_LOADING,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
} from "../../actions/image-search/imageSearchActions";

const initialState = {
  searchImageList: [],
  isLoading: false,
  searchImageListError: false,
};

/**
 * Reducer function, execute based on action type which dispatch from action creator function
 *@type {function}
 * @type {object} data
 */

const ImageSearchReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_IMAGES_SUCCESS: {
      return {
        ...state,
        searchImageList: action.payload,
        isLoading: false,
      };
    }
    case GET_IMAGES_ERROR: {
      return {
        isLoading: false,
        searchImageListError: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default ImageSearchReducer;
