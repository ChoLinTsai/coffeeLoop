const css = require('../css/app.scss');
require("font-awesome-sass-loader");

// short for console.log()
function $log(x) {
  return console.log(x);
}

// get a html element
function $select(x) {
  return document.querySelector(x);
}

// get html elements
function $selectAll(x) {
  return document.querySelectorAll(x);
}

// short for addEventListener
function $event(x, y, z, i) {
  return x.addEventListener(y, z, i);
}

// set functions for addClassList and removeClassList
function $addClsls(element, ...newClass) {
  return element.classList.add(...newClass);
}
function $rmClsls(element, ...rmClass) {
  return element.classList.remove(...rmClass);
}

// get a#menu-btn and line 1, 2, 3
const menuBtn = $select('#menu-btn'),
  line1 = $select('#line-1'),
  line2 = $select('#line-2'),
  line3 = $select('#line-3'),
  closeBtn = $select('#close-btn');

// event mouse over/out on menuBtn
$event(menuBtn, "mouseover", menuBtnMouseOver);
$event(menuBtn, "mouseout", menuBtnMouseOut);

// event click on menuBtn to open shop menu
$event(menuBtn, "click", menuBtnClick);

// click close btn to close shop menu
$event(closeBtn, 'click', closeBtnClick);

// function to rotate line 1 , 3  and hide line 2
function menuBtnMouseOver() {
  line1.style.transform = "rotate(20deg)";
  line2.style.display = "none";
  line3.style.transform = "rotate(-20deg)";
}

// function to rotate back line 1 , 3 and show line 2
function menuBtnMouseOut() {
  line1.style.transform = "rotate(0deg)";
  line2.style.display = "block";
  line3.style.transform = "rotate(0deg)";
}

// function click to move menuBtn
function menuBtnClick() {
  let divBg = $select('.bg'),
    menuLines = [...$selectAll('.menu-line')],
    headerh1 = [...$selectAll('.header-h1')],
    headerContent1 = $select('#header-content-1'),
    headerContent2 = $select('#header-content-2');

  divBg.style.animation = "bgFill 0.5s";
  menuLines.map(i => i.style.visibility = 'hidden');
  headerContent1.style.transform = 'translateX(100%)';
  headerContent2.style.transform = 'translateX(0)';
}

function closeBtnClick() {
  let divBg = $select('.bg'),
    menuLines = [...$selectAll('.menu-line')],
    headerContent1 = $select('#header-content-1'),
    headerContent2 = $select('#header-content-2');

  divBg.style.animation = "bgUnFill 0.5s";
  menuLines.map(i => i.style.visibility = 'visible');
  headerContent2.style.transform = 'translateX(-100%)';
  headerContent1.style.transform = 'translateX(0%)';
}
