import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/rootReducers";

const initialState = {};
const middlewares = [thunk];

/**
* createStore is function to create application store, accepted two parameter rootReducer and initialState, 
whenever reducer state get update, store get updated
*@type {function}
* @type {object} data
*/
const store = createStore(
  RootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
