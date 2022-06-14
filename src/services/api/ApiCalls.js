/* eslint-disable quote-props */

const API_URL = 'http://192.168.1.250:8000';

/** ***  *** *** */
/** LLamadas GET */
/** *** *** **** */

export const getRecipes = async () => (
  fetch(`${API_URL}/api/recipes`)
    .then((response) => response.json())
    .catch((error) => console.log(error)) // to catch the errors if any
);

export const getUserRecipes = async (userId, userToken) => (
  fetch(`${API_URL}/api/user/recipes`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
);

export const getUserFavourites = async (userId) => (
  fetch(`${API_URL}/api/user/${userId}/favourites`)
    .then((response) => response.json())
    .catch((error) => console.log(error)) // to catch the errors if any
);

export const getComments = async (recipeId) => (
  fetch(`${API_URL}/api/comments/${recipeId}`)
    .then((response) => response.json())
    .catch((error) => console.log(error)) // to catch the errors if any
);

/** ***  *** ***  */
/** LLamadas POST */
/** *** *** ****  */

export const register = async (email, password, name, picture) => (
  fetch(`${API_URL}/api/register`, {
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
  }).then((response) => {
    if (response.status === 500) {
      return response;
    }
    login(email, password);
  }).catch((error) => (error))
);

export const login = async (username, password) => {
  const token = await fetch(`${API_URL}/api/login_check`, {
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
    const userData = await fetch(`${API_URL}/api/profile`, {
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
  fetch(`${process.env.API_KEY}/api/recipe/new`, {
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

export const toggleFavourite = async (userId, recipeId, userToken) => (
  fetch(`${API_URL}/api/recipe/favourite/${recipeId}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
);

export const checkFavourite = async (userId, recipeId, userToken) => (
  fetch(`${API_URL}/api/recipe/favouriteCheck/${recipeId}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
);

export const postComment = async (recipeId, userId, textComment) => (
  fetch(`${API_URL}/api/comment`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipeId,
      userId,
      textComment,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
);

export const rateRecipe = async (recipeId, rating) => (
  fetch(`${API_URL}/api/recipe/rate`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipeId,
      rating,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
);

/** ***  *** ***  */
/** LLamadas PUT */
/** *** *** ****  */

export const editRecipe = async (userToken, values) => (
  fetch(`${API_URL}/api/recipe/edit/${values.id}`, {
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

export const editProfile = async (userToken, id, name, profile) => (
  fetch(`${API_URL}/api/user/${Number(id)}/edit`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      name,
      picture: profile,
    }),
  }).then((response) => response.json())
    .catch((error) => error) // to catch the errors if any;
);

/**  ***  *** ***   */
/** LLamadas DELETE */
/**  *** *** ****   */

export const deleteRecipe = async (id, userToken) => (
  fetch(`${API_URL}/api/recipe/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
  }).then((response) => response.json())
    .catch((error) => error) // to catch the errors if any;
);
