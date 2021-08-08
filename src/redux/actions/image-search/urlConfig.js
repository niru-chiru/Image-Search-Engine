import { baseUrl, API_KEY } from "../baseApi";

/**
 * URL configuration
 *@type {function}
 * @type {object} data
 */
class UrlConfig {
  getPixabayURL() {
    return baseUrl + "/api/?key=" + API_KEY + "&q=";
  }
  getUnsplashURL() {
    return baseUrl + "";
  }
}
export default new UrlConfig();
