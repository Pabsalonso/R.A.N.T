/* eslint no-console: 0 */

const log = (...message) => {
  if (!__DEV__) {
    return;
  }

  console.log(...message);

};

const warn = (...message) => {
  if (!__DEV__) {
    return;
  }

  console.warn(...message);
};

export default { log, warn };
