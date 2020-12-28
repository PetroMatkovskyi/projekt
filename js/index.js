const mainMenu = document.querySelector("#main");
const vegetarianMenu = document.querySelector("#vegetarian");
const drinksMenu = document.querySelector("#drinks");

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

mainButton.addEventListener("click", showMainMenu);
vegetarianButton.addEventListener("click", showVegetarianMenu);
drinksButton.addEventListener("click", showDrinksMenu);

//Carousel

{
  const images = [
    "img/on_insta/fire-burger.jpg",
    "img/on_insta/delicious-burger.jpg",
    "img/on_insta/beautiful_view.jpg",
    "img/on_insta/big-burgers.png",
    "img/on_insta/black_burger.jpg",
    "img/on_insta/on_the_beach.jpg",
    "img/on_insta/grilled_burgers.jpg",
    "img/on_insta/friendly_meeting.jpg",
  ];

  let currentIdx = 0;
  function showCurrent() {
    const imgElement1 = document.querySelector(".all_insta_photo .img1");
    const imgElement2 = document.querySelector(".all_insta_photo .img2");
    const imgElement3 = document.querySelector(".all_insta_photo .img3");
    const imgElement4 = document.querySelector(".all_insta_photo .img4");
    const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
    const idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
    const idx4 = idx3 + 1 >= images.length ? 0 : idx3 + 1;
    imgElement1.src = images[currentIdx];
    imgElement2.src = images[idx2];
    imgElement3.src = images[idx3];
    imgElement4.src = images[idx4];
  }

  function showNext() {
    currentIdx++;
    if (currentIdx >= images.length) currentIdx = 0;
    showCurrent();
  }

  function showPrev() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = images.length - 1;
    showCurrent();
  }

  setInterval(showNext, 3000);
  document.querySelector(".next").addEventListener("click", showNext);
  document.querySelector(".prev").addEventListener("click", showPrev);
  showCurrent();
}

//Burger menu

const bodyOff = document.querySelectorAll(".bodyOff");
const burger = document.querySelector(".burger");

function burgerOn() {
  for (let i = 0; i < bodyOff.length; i++)
    bodyOff[i].classList.add("displayOff");
  burger.classList.remove("displayOff");
}

function burgerOff() {
  for (let i = 0; i < bodyOff.length; i++)
    bodyOff[i].classList.remove("displayOff");
  burger.classList.add("displayOff");
}

document.querySelector(".burger-icon").addEventListener("click", burgerOn);
document.querySelector(".burger-button").addEventListener("click", burgerOff);
