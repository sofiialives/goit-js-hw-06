const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
const ingrId = document.getElementById('ingredients');
ingredients.forEach(ingredient =>{
const liItem = document.createElement('li');
liItem.textContent = ingredient;
liItem.classList.add('item');
ingrId.append(liItem);
});

