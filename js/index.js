const mainMenu = document.querySelector("#main");
const vegetarianMenu = document.querySelector("#vegetarian");
const drinksMenu = document.querySelector("#drinks");

console.log(mainMenu);
console.log(vegetarianMenu);
console.log(drinksMenu);

function showMainMenu() {
  mainMenu.classList.remove("displayOff");
  vegetarianMenu.classList.add("displayOff");
  drinksMenu.classList.add("displayOff");
}

function showVegetarianMenu() {
  vegetarianMenu.classList.remove("displayOff");
  mainMenu.classList.add("displayOff");
  drinksMenu.classList.add("displayOff");
}

function showDrinksMenu() {
  drinksMenu.classList.remove("displayOff");
  vegetarianMenu.classList.add("displayOff");
  mainMenu.classList.add("displayOff");
}

const mainButton = document.querySelector(".main-button");
const vegetarianButton = document.querySelector(".vegetarian-button");
const drinksButton = document.querySelector(".drinks-button");

console.log(mainButton);
console.log(vegetarianButton);
console.log(drinksButton);

mainButton.addEventListener("click", showMainMenu);
vegetarianButton.addEventListener("click", showVegetarianMenu);
drinksButton.addEventListener("click", showDrinksMenu);
