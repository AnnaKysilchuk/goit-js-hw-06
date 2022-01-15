const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsListEl = document.querySelector("#ingredients");
// const ingredientsItemsEl = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const addIngredient = document.createElement("li");
//   addIngredient.classList.add("item");
//   addIngredient.textContent = ingredients[i];
//   ingredientsItemsEl.push(addIngredient);
// }
// console.log(ingredientsItemsEl);

// ingredientsListEl.append(...ingredientsItemsEl);

const ingredientsListEl = document.querySelector("#ingredients");
const ingredientsItemsEl = ingredients.map(ingredient => {
  const addIngredient = document.createElement("li");
  addIngredient.classList.add("item");
  addIngredient.textContent = ingredient;
  return addIngredient;
});
console.log(ingredientsItemsEl);

ingredientsListEl.append(...ingredientsItemsEl);
