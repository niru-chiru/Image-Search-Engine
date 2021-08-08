import { get } from "../baseApi";
import { authHeader } from "../AxiosHeader";
import UrlConfig from "./urlConfig";
import {
  error,
  success,
  warning,
} from "../../../views/components/Error/alertView";

/**
 * Action Types
 * @constants
 * @type {string} data
 */

//Action Types
export const GET_IMAGES_LOADING = "GET_IMAGES_LOADING";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_ERROR = "GET_IMAGES_ERROR";

/**
 * Action Creator function, communicatiing with API Endpoints to fetch data from database, whenever event trigger from UI
 *@type {function}
 *@type {object} data
 */

/**
* dispatch is function defined in action creator, return the object data, that contains Action Type and Action data property,
  based on action type updates the state of reducer
*@type {function}
* @type {object} data
*/

//Action Creator function
export const getImageSearchList = (payload) => async (dispatch) => {
  const v = payload;
  let url = UrlConfig.getPixabayURL();
  url =
    url +
    v.Color +
    "&image_type=" +
    v.ImgType +
    "&category=" +
    v.Category +
    "&per_page=" +
    v.Number;

  dispatch({
    type: GET_IMAGES_LOADING,
  });
  let header = authHeader();
  let res = await get(url, header);
  if (res && res.status === 200) {
    success("Images fetched successgully");
    dispatch({
      type: GET_IMAGES_SUCCESS,
      payload: res.data.hits,
    });
  } else if (res && res.isAxiosError) {
    error("Error while fetching images!");
    return dispatch({
      type: GET_IMAGES_ERROR,
      payload: res.isAxiosError,
    });
  }
};
