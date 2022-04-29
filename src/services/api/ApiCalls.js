/* eslint-disable quote-props */
import base64 from 'react-native-base64';

/** ***  *** *** */
/** LLamadas GET */
/** *** *** **** */

export const getRecipes = async () => (
  fetch('http://192.168.1.143:8000/api/recipes')
    .then((response) => response.json())
    .catch((error) => console.log(error)) // to catch the errors if any
);

/** ***  *** ***  */
/** LLamadas POST */
/** *** *** ****  */

export const register = async (email, password) => (
  fetch('http://192.168.1.143:8000/api/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password: base64.encode(password), // comprobar que se puede luego desencodear y hacer login con texto plano
    }),
  }).catch((error) => console.log(error)) // to catch the errors if any;
);

export const login = async (username, password) => (
  fetch('http://192.168.1.143:8000/api/login_check', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((response) => response.json())
    .catch((error) => console.log(error)) // to catch the errors if any;
);
