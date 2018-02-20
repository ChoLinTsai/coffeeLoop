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

// set liShopNames as array of .li-shop-name and other elements
const liShopNames = [...$selectAll('.li-shop-name')],
  getfig = $select('#figure-section'),
  getMainShopName = $select('#main-shop-name'),
  getMainShopLocation = $select('#main-shop-location'),
  getMenu = $select('#main-coffee-choice'),
  getSocialLinksEles = [...$selectAll('.social-links')],
  // get liShopNames and coffeeShops(import from shop.js) into 2d array
  getCoffeeShopNames = get2dArray(liShopNames, coffeeShops),
  getRandomShop = coffeeShops[Math.floor(Math.random() * coffeeShops.length)],
  // get random shop's index
  getRandomShopIndex = coffeeShops.indexOf(getRandomShop);

function getCafeContent(index) {
  // get random shop's obj
  let getShopObj = coffeeShops[index],
    // get random shop obj's links and map into a array
    getShopObjLinks = Object.values(getShopObj.socialLinks).map(i => i),
    // get getSocialLinksEles and getShopObjLinks into 2d array
    get2dSocialAry = get2dArray(getSocialLinksEles, getShopObjLinks);

  // map out all cafe names into liShopNames
  getCoffeeShopNames.map(i => {
    let [x, y] = i;
    x.innerHTML = y.name;
  })

  // color the selected liShopNames
  liShopNames[index].style.color = "#FF895D";
  // get figure img according to selected shopObj index
  getfig.style.backgroundImage = `url(${getShopObj.figure})`;
  // get shop name and location into innerHTML
  getMainShopName.innerHTML = getShopObj.name;
  getMainShopLocation.innerHTML = getShopObj.location;
  // get menu from shopObj and map into getMenu
  getMenu.innerHTML = getShopObj.menu.map(i => `<li>${i}</li>`).join('');
  // get social links and elements and map link into href
  get2dSocialAry.map(i => {
    // x = getSocialLinksEles, y = getShopObjLinks
    let [x, y] = i;
    x.href = y;
  })

  getFigMove();
}

$event(window, 'DOMContentLoaded', getCafeContent(getRandomShopIndex), false);

let getCurrentIndex = getRandomShopIndex;

liShopNames.map(i => $event(i, 'click', () => {

  let getClickedIndex = liShopNames.indexOf(i);

  liShopNames[getCurrentIndex].style.color = '#333';

  getCafeContent(getClickedIndex);
  return getCurrentIndex = getClickedIndex;
}));





function getFigMove() {
  let figPosition = 0;
  setTimeout(() => {
		loopToRight(figPosition);
  }, 500)
}

function loopToRight(figPosition) {

	let setloopToRight = setInterval(() => {

		if (figPosition >= 99) {
			clearInterval(setloopToRight);
			setTimeout(() => loopToLeft(figPosition), 300);
		}

		getfig.style.backgroundPosition = `${figPosition}% center`;
		figPosition = figPosition + 0.1

	}, 10)

}

function loopToLeft(figPosition) {

	let setloopToLeft = setInterval(() => {

		if (figPosition <= 0) {
			clearInterval(setloopToLeft);
			setTimeout(() => loopToRight(figPosition), 300);
		}
		getfig.style.backgroundPosition = `${figPosition}% center`;
		figPosition = figPosition - 0.1
	}, 10)
}
