import coffeeimg1 from '../img/coffee-shop-1.jpg';
import coffeeimg2 from '../img/coffee-shop-2.jpg';
import coffeeimg3 from '../img/coffee-shop-3.jpg';
import coffeeimg4 from '../img/coffee-shop-4.jpg';
import coffeeimg5 from '../img/coffee-shop-5.jpg';


const coffeeShop1 = {
  name: 'Verve',
  location: '8925 Melrose Avenue West Hollywood, CA',
  menu: [
    "Verve Speical",
    "Black / Americano",
    "Latte",
    "Mocha",
    "Cappuccino",
    "Espresso"
  ],
  figure: coffeeimg1,
  socialLinks: {
    facebook: "https://www.facebook.com/vervecoffee",
    instagram: "https://www.instagram.com/vervecoffee/",
    twitter: "https://twitter.com/vervecoffee",
    snapchat: "https://www.snapchat.com/"
  }
}

const coffeeShop2 = {
  name: 'Blue Bottle',
  location: '2 S Park St, San Francisco, CA',
  menu: [
    "Blue Speical",
    "Caffè Latte",
    "Caffè Mocha",
    "Cappuccino",
    "Espresso",
    "Macchiato",
    "Affogato"
  ],
  figure: coffeeimg2,
  socialLinks: {
    facebook: "https://www.facebook.com/bluebottlecoffee",
    instagram: "https://www.instagram.com/bluebottle/",
    twitter: "https://twitter.com/bluebottleroast",
    snapchat: "https://www.snapchat.com/"
  }
}

const coffeeshop3 = {
  name: 'Fabryka Kary',
  location: "Cherkasy Ukraine",
  menu: [
    "Ukraine Speical",
    "Latte",
    "Mocha",
    "Cappuccino",
    "Espresso",
    "Macchiato"
  ],
  figure: coffeeimg3,
  socialLinks: {
    facebook: "https://www.facebook.com/fabryka.kavy.che/",
    instagram: "https://www.instagram.com/fabryka_kavy_ck/",
    twitter: "https://twitter.com/",
    snapchat: "https://www.snapchat.com/"
  }
}

const coffeeshop4 = {
  name: 'Black Dog',
  location: "W 87th Street PKWY Lenexa, KS",
  menu: [
    "Black Dog Speical",
    "Black / Americano",
    "Latte",
    "Mocha",
    "Cappuccino",
    "Espresso",
    "Macchiato"
  ],
  figure: coffeeimg4,
  socialLinks: {
    facebook: "https://www.facebook.com/bdcoffeehouse",
    instagram: "https://www.instagram.com/bdcoffeehouse/",
    twitter: "https://twitter.com/bdcoffeehouse",
    snapchat: "https://www.snapchat.com/"
  }
}

const coffeeshop5 = {
  name: 'CoCo Bean',
  location: "1114 Environ Way, Chapel Hill, NC",
  menu: [
    "Bean Speical",
    "Black / Americano",
    "Latte",
    "Mocha",
    "Flat White",
    "Cortado",
    "Cappuccino"
  ],
  figure: coffeeimg5,
  socialLinks: {
    facebook: "https://www.facebook.com/cocobeancoffee",
    instagram: "https://twitter.com/cocobeancoffee",
    twitter: "https://www.instagram.com/cocobeancoffee/",
    snapchat: "https://www.snapchat.com/"
  }
}

const coffeeShops = [coffeeShop1, coffeeShop2, coffeeshop3, coffeeshop4, coffeeshop5]

export default coffeeShops;
