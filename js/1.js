const liItem = document.querySelectorAll("li.item");
console.log("Number of categories:", liItem.length);

liItem.forEach(item => {
const catItem = item.querySelector("h2").textContent;
const elItem = item.querySelectorAll("li").length;
console.log("Category:", catItem);
console.log("Elements:", elItem);
});