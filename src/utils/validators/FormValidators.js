/* eslint max-len: 0 */

// import moment from 'moment';

// Utils
import * as Utils from 'utils/Utils';

export const emailValidator = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

/**
 * @param birthDate
 * @param format
 * @returns {*|never|boolean}
 */
export const isValidBirthDate = (birthDate, format = 'DD/MM/YYYY') => {
  if (!birthDate || typeof birthDate !== 'string') return false;
  const split = birthDate.split('/'); // split[0] = dd | split[1] = mm | split[2] = yyyy
  const yyyy = parseInt(split[2], 10);

  return moment(birthDate, format, true).isValid() && (yyyy + 18) <= new Date().getFullYear();
};

export const isChecked = (checkBoxValue) => {
  // Check format
  if (!checkBoxValue || typeof checkBoxValue !== 'boolean') return false;

  return true;
};

export const isValidCardCVV = (cvv) => {
  // Check format
  if (!cvv || typeof cvv !== 'string') return false;

  // Check length
  return cvv.length >= 3;
};

export const isValidCardExpirationDate = (expirationDate) => {
  // Check format
  if (!expirationDate || typeof expirationDate !== 'string') return false;

  // Check length
  return expirationDate.length >= 5;
};

export const isValidCardExpirationMonth = (expirationMonth) => {
  // Check format
  if (!expirationMonth || typeof expirationMonth !== 'string') return false;

  // Check length
  return expirationMonth.length >= 2 && parseInt(expirationMonth, 10) <= 12;
};

export const isValidCardExpirationYear = (expirationYear) => {
  // Check format
  if (!expirationYear || typeof expirationYear !== 'string') return false;

  // Check currentYear
  const currentYear = Utils.getCurrentDateTimeFormatted('YY');
  if (expirationYear < currentYear) return false;

  // Check length
  return expirationYear.length >= 2 && parseInt(expirationYear, 10) <= 31;
};

export const isValidCardNumber = (card, cardLength) => {
  // Check format
  if (!card || typeof card !== 'string') return false;

  // Check length
  return card.length >= cardLength;
};

export const isValidDni = (dni) => {
  // Check format
  if (!dni || typeof dni !== 'string') return false;

  // Check length
  return (dni.trim()).length >= 6;
};

export const isValidEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Check format
  if (!email || typeof email !== 'string') return false;

  return regex.test(email.trim());
};

export const isValidLoginForm = (username, password) => {
  return isValidEmail(username) && isValidPassword(password);
};

export const isValidName = (name) => {
  // Check format
  if (!name || typeof name !== 'string') return false;

  // Check length
  return (name.trim()).length > 0;
};

export const isValidNumber = (value) => {
  // Check format
  if (!value || typeof value !== 'number') return false;

  // Check length
  return value > 0;
};

export const isValidPassword = (password) => {
  // Check format
  if (!password || typeof password !== 'string') return false;

  // Check length
  return password.length >= 6;
};

export const isValidPasswordCoincidence = (password, passwordRepeat) => {
  // Check format
  if (!password || !passwordRepeat || typeof password !== 'string' || typeof passwordRepeat !== 'string') return false;

  // Check length
  if (password.length !== passwordRepeat.length) return false;

  // Check passwords
  return (password.trim()) === passwordRepeat.trim();
};

export const isValidPhone = (phone) => {
  // Check format
  if (!phone || typeof phone !== 'string') return false;

  // Check length
  return (phone.trim()).length >= 9;
};

export const isValidPhonePrefix = (phonePrefix) => {
  // Check format
  if (!phonePrefix || typeof phonePrefix !== 'string') return false;

  // Check length
  return (phonePrefix.trim()).length >= 1;
};

export const isValidPostalCode = (postalCode) => {
  // Check format
  if (!postalCode || typeof postalCode !== 'string') return false;

  // Check length
  return postalCode.length >= 5;
};

export const isValidString = (value) => {
  // Check format
  if (!value || typeof value !== 'string') return false;

  // Check length
  return (value.trim()).length > 0;
};

export const isValidStringDetail = (value) => {
  // Check format
  if (!value || typeof value !== 'string') return false;

  // Check length
  return value.length > 50;
};

export const isValidObject = (value) => {
  // Check format
  if (!value || typeof value !== 'object') return false;

  // Check length
  return true;
};

export const isValidYear = (year) => {
  // Check format
  if (!year || typeof year !== 'string') return false;

  // Check length
  return (year.trim()).length > 3;
};
