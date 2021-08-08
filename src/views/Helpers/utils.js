/**
 * Making Deep Property Access Safe in JavaScript
 * @constant
 * @type {function}
 * @param {string} fn
 * @return {string}
 */
export const getSafe = (fn) => {
  try {
    return fn;
  } catch (e) {
    return "";
  }
};
