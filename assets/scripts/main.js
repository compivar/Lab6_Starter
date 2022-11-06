// main.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  const storedRecipes = localStorage.getItem('recipes');
  if(storedRecipes === null) {
    return [];
  }
  return JSON.parse(storedRecipes);
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. TODO - Get a reference to the <main> element
  const mainElem = document.querySelector('main');
  // A11. TODO - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>
  for(let i = 0; i < recipes.length; i++) {
    let currentRecipe = document.createElement("recipe-card");
    currentRecipe.data = recipes[i];
    mainElem.append(currentRecipe);
    //console.log(currentRecipe.titleTxt);

}
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {

  // B2. TODO - Get a reference to the <form> element
  let formElem = document.getElementById("new-recipe");
  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked
  let buttons = document.querySelectorAll("button");
  let submitButton = buttons[0];
  
  submitButton.addEventListener('click', function () { //B3
    let formData = new FormData(formElem); //B4
    let recipeObject = {};
    for (const [key, value] of formData) {
      recipeObject[`${key}`] = `${value}`; //B5
    }
    let card = document.createElement("recipe-card"); //B6
    card.data = recipeObject; //B7
    document.querySelector("main").append(card); //B8
    
    let storedRecipes = getRecipesFromStorage();
    storedRecipes.push(recipeObject);
    localStorage.setItem('recipes', JSON.stringify(storedRecipes)); //B9
  });

  // Steps B4-B9 will occur inside the event listener from step B3
  // B4. xTODO - Create a new FormData object from the <form> element reference above
  // B5. xTODO - Create an empty object (I'll refer to this object as recipeObject to
  //            make this easier to read), and then extract the keys and corresponding
  //            values from the FormData object and insert them into recipeObject
  // B6. xTODO - Create a new <recipe-card> element
  // B7. xTODO - Add the recipeObject data to <recipe-card> using element.data
  // B8. xTODO - Append this new <recipe-card> to <main>
  // B9. xTODO - Get the recipes array from localStorage, add this new recipe to it, and
  //            then save the recipes array back to localStorage

  // xB10. TODO - Get a reference to the "Clear Local Storage" button
  // xB11. TODO - Add a click event listener to clear local storage button
  let clearButton = buttons[1]; //B10
  clearButton.addEventListener('click', function () { //B11
    localStorage.clear(); //B12
    document.querySelector('main').innerHTML = ""; //B13
  })
  
  // Steps B12 & B13 will occur inside the event listener from step B11
  // xB12. TODO - Clear the local storage
  // xB13. TODO - Delete the contents of <main>

}