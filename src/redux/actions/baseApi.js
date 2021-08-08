import Axios from "axios";

/**
 * GET,Post,Put Generic function, returns result
 *@type {function}
 * @type {object} data
 */
export const get = (url, headers = {}) => {
  return Axios.get(url, { headers: headers }).then(
    (resp) => {
      return resp;
    },
    (err) => {
      console.error("Error from GET call of ", url);
    }
  );
};

export const post = (url, headers = {}) => {
  //Do something.......
};

export const put = (url, payload, headers = {}) => {
  //Do something.........
};

/**
 * Application Base API, API Access Key
 * @constants
 * @type {string} data
 */
export const baseUrl = "https://pixabay.com";
export const API_KEY = "22822985-621d96a3c3638ba461ecce9ca";
