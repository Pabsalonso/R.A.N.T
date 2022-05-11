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

export const getUserRecipes = async (userId) => (
  fetch('http://192.168.1.143:8000/api/user/recipes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
);

/** ***  *** ***  */
/** LLamadas POST */
/** *** *** ****  */

export const register = async (email, password, name, picture) => (
  fetch('http://192.168.1.143:8000/api/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      name,
      picture,
    }),
  }).then(() => login(email, password)).catch((error) => (error))
);

export const login = async (username, password) => {
  const token = await fetch('http://192.168.1.143:8000/api/login_check', {
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
    .catch((error) => error); // to catch the errors if any;
  if (token.code === undefined) {
    const userData = await fetch('http://192.168.1.143:8000/api/profile', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`,
      },
    }).then((response) => response.json())
      .catch((error) => error);
    return { ...token, ...userData };
  }
  return token;
};

export const newRecipe = async (userId, userToken, values) => (
  fetch('http://192.168.1.143:8000/api/recipe/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      userId,
      title: values.title,
      text: values.text,
      rating: 0,
      steps: values.steps,
      img: values.img,
      prepTime: values.prepTime,
      dificulty: values.dificulty,
      people: values.people,
      ingredients: values.ingredients,
    }),
  }).then((response) => response.json())
    .catch((error) => error) // to catch the errors if any;
);

/** ***  *** ***  */
/** LLamadas PUT */
/** *** *** ****  */

export const editRecipe = async (userToken, values) => (
  fetch(`http://192.168.1.143:8000/api/recipe/edit/${values.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      title: values.title,
      text: values.text,
      rating: 0,
      steps: values.steps,
      img: values.img,
      prepTime: values.prepTime,
      dificulty: values.dificulty,
      people: values.people,
      ingredients: values.ingredients,
    }),
  }).then((response) => response.json())
    .catch((error) => error) // to catch the errors if any;
);
