/** ***  *** *** */
/** LLamadas GET */
/** *** *** **** */

export const getRecipes = async () => {
  let result = '';
  await fetch('http://192.168.1.143:8000/api/recipes')
    .then((response) => response.json())
    .then((responseData) => {
      result = responseData;
    })
    .catch((error) => console.log(error)); //to catch the errors if any
  return result;
};
