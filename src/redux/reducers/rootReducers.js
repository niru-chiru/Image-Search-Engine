import { combineReducers } from "redux";
import images from "./image-search/imageReducer";

/**
* combineReducers is function, helps to combine all application reducers into single (root) reuducer and pass to the store
whenever reducer state get update, store get update
*@type {function}
* @type {object} data
*/

const RootReducer = combineReducers({
  ImageSearch: images,
});

export default RootReducer;
