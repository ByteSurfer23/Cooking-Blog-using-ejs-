let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');

addIngredientsBtn.addEventListener('click', function(){
  let newIngredientDiv = document.createElement('div');
  newIngredientDiv.classList.add('ingredeintDiv', 'mb-1');
  let newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'ingredients';
  newInput.classList.add('form-control');
  newInput.value = '';
  newIngredientDiv.appendChild(newInput);
  ingredientList.appendChild(newIngredientDiv);
});
