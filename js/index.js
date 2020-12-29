const mainMenu = document.querySelector("#main");
const vegetarianMenu = document.querySelector("#vegetarian");
const drinksMenu = document.querySelector("#drinks");
const mainButton = document.querySelector(".main-button");
const vegetarianButton = document.querySelector(".vegetarian-button");
const drinksButton = document.querySelector(".drinks-button");

function showMainMenu() {
  mainMenu.classList.remove("displayOff");
  mainButton.classList.add("focus");
  vegetarianMenu.classList.add("displayOff");
  drinksMenu.classList.add("displayOff");
  vegetarianButton.classList.remove("focus");
  drinksButton.classList.remove("focus");
}

function showVegetarianMenu() {
  vegetarianMenu.classList.remove("displayOff");
  vegetarianButton.classList.add("focus");
  mainMenu.classList.add("displayOff");
  drinksMenu.classList.add("displayOff");
  mainButton.classList.remove("focus");
  drinksButton.classList.remove("focus");
}

function showDrinksMenu() {
  drinksMenu.classList.remove("displayOff");
  drinksButton.classList.add("focus");
  vegetarianMenu.classList.add("displayOff");
  mainMenu.classList.add("displayOff");
  vegetarianButton.classList.remove("focus");
  mainButton.classList.remove("focus");
}

mainButton.addEventListener("click", showMainMenu);
vegetarianButton.addEventListener("click", showVegetarianMenu);
drinksButton.addEventListener("click", showDrinksMenu);

//Carousel

{
  const images = [
    {src:"img/on_insta/delicious-burger.jpg",
     alt: "delicious burger"},      
   {src: "img/on_insta/beautiful_view.jpg",
    alt: "beautiful view"}, 
    {src: "img/on_insta/big-burgers.png",
      alt: "big burgers"}, 
    {src: "img/on_insta/black_burger.jpg",
      alt: "black burger"},
     {src:"img/on_insta/on_the_beach.jpg",
      alt: "on_the_beach"},
    {src:"img/on_insta/grilled_burgers.jpg",
      alt: "grilled burgers"},
   {src: "img/on_insta/friendly_meeting.jpg",
     alt: "friendly_meeting"} 
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
    imgElement1.src = images[currentIdx].src;
    imgElement2.src = images[idx2].src;
    imgElement3.src = images[idx3].src;
    imgElement4.src = images[idx4].src;
    imgElement1.alt = images[currentIdx].alt;
    imgElement2.alt = images[idx2].alt;
    imgElement3.alt = images[idx3].alt;
    imgElement4.alt = images[idx4].alt;
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
