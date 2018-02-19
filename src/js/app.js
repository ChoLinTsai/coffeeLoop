const css = require('../css/app.scss');
require("font-awesome-sass-loader");
import coffeeShops from './shops';
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

// make a 2d array
function get2dArray(x, y) {
  let resultArray = [];
  for (let i = 0; i < x.length; i++) {
    resultArray.push([
      x[i], y[i]
    ]);
  }
  return resultArray;
}

$event(window, 'DOMContentLoaded', windowOnLoad, false);

function windowOnLoad() {
  // set liShopNames as array of .li-shop-name
  let liShopNames = [...$selectAll('.li-shop-name')];
  // get liShopNames and coffeeShops into 2d array
  let getCoffeeShopNames = get2dArray(liShopNames, coffeeShops)
  // map out all cafe names into liShopNames
  getCoffeeShopNames.map(i => {
    let [x, y] = i;
    x.innerHTML = y.name;
  })
}
