const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liSave = [];
const ingrId = document.getElementById('ingredients');

ingredients.forEach(ingredient =>{
const liItem = document.createElement('li');
liItem.textContent = ingredient;
liItem.classList.add('item');
liSave.push(liItem);
});

ingrId.append(...liSave)
