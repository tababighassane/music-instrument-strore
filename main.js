///all article
//guitar

var g1 = {
  model: "Fender Squier Bullet Tele IL Brown Sunburst",
  instrument: "guitar",
  brand: "Fender",
  price: 133,
  image:
    "https://images.musicstore.de/images/0960/fender-squier-bullet-tele-il-brown-sunburst_1_GIT0050685-000.jpg",
};
var g2 = {
  model: "PRS SE Standard 24 Translucent Blue",
  instrument: "guitar",
  brand: "PRS",
  price: 482,
  image:
    "https://images.musicstore.de/images/0960/prs-se-standard-24-translucent-blue_1_GIT0043737-000.jpg",
};
var g3 = {
  model: "Jackson JS32 Kelly Ferrari Red",
  instrument: "guitar",
  brand: "Jackson ",
  price: 344,
  image:
    "https://images.musicstore.de/images/0960/jackson-js32-kelly-ferrari-red_1_GIT0049219-000.jpg",
};

var g4 = {
  model: "Jackson JS Series RR Minion JS1X AM Satin Black",
  instrument: "guitar",
  brand: "Jackson",
  price: 145,
  image:
    "https://images.musicstore.de/images/0960/jackson-js-series-rr-minion-js1x-am-satin-black_1_GIT0046535-000.jpg",
};
var g5 = {
  model: "Fame SE Series TL Deluxe Amber",
  instrument: "guitar",
  brand: "Fame",
  price: 188,
  image:
    "https://images.musicstore.de/images/0960/fame-se-series-tl-deluxe-amber_1_GIT0051102-000.jpg",
};
//drums

var d1 = {
  model: "Pearl RS505C/C31 Roadshow Studio Jet Black",
  instrument: "drums",
  brand: "Pearl",
  price: 503,
  image:
    "https://images.musicstore.de/images/0960/pearl-rs505c-c31-roadshow-studio-jet-black_1_DRU0040889-000.jpg",
};

var d2 = {
  model: "Tama Rhythm Mate RM50YH6, Red Stream #RDS",
  instrument: "drums",
  brand: "Tama",
  price: 505,
  image:
    "https://images.musicstore.de/images/0960/tama-rhythm-mate-rm50yh6-red-stream-rds_1_DRU0031773-000.jpg",
};
var d3 = {
  model: "Tama Imperialstar IE58H6W-BWW Burgundy Walnut Wrap",
  instrument: "drums",
  brand: "Tama",
  price: 629,
  image:
    "https://images.musicstore.de/images/0960/tama-imperialstar-ie58h6w-bww-burgundy-walnut-wrap_1_DRU0037994-000.jpg",
};
var d4 = {
  model: "Tama Imperialstar IE62H6W-BWW Burgundy Walnut Wrap",
  instrument: "drums",
  brand: "Tama",
  price: 755,
  image:
    "https://images.musicstore.de/images/0960/tama-imperialstar-ie62h6w-bww-burgundy-walnut-wrap_1_DRU0038012-000.jpg",
};
var d5 = {
  model: "Sonor AQX Studio Complete 2 - SET",
  instrument: "drums",
  brand: "Sonor",
  price: 696,
  image:
    "https://images.musicstore.de/images/0960/sonor-aqx-studio-complete-2-set_1_DRU330.jpg",
};
////basses

var b1 = {
  model: "JD Bass guitar JB Black",
  instrument: "bass",
  brand: "JD",
  price: 108,
  image:
    "https://images.musicstore.de/images/0960/j-und-d-bass-guitar-jb-black_1_BAS0000913-001.jpg",
};
var b2 = {
  model: "JD PB Mini Black",
  instrument: "bass",
  brand: "JD",
  price: 93,
  image:
    "https://images.musicstore.de/images/0960/j-und-d-pb-mini-black_1_BAS0004807-000.jpg",
};

var b3 = {
  model: "Jackson JS Series Concert Bass JS2 AM Snow White",
  instrument: "bass",
  brand: "Jackson",
  price: 225,
  image:
    "https://images.musicstore.de/images/0960/jackson-js-series-concert-bass-js2-am-snow-white_1_BAS0010642-000.jpg",
};

var b4 = {
  model: "Ibanez Standard TMB30-IV Ivory",
  instrument: "bass",
  brand: "Ibanez",
  price: 150,
  image:
    "https://images.musicstore.de/images/0960/ibanez-standard-tmb30-iv-ivory_1_BAS0008518-000.jpg",
};
var b5 = {
  model: "Höfner Shorty Bass CT Root Beer",
  instrument: "bass",
  brand: "Höfner",
  price: 133,
  image:
    "https://images.musicstore.de/images/0960/hoefner-shorty-bass-ct-root-beer_1_BAS0011800-000.jpg",
};

var arrayOfItems = [g1, g2, g3, g4, g5, d1, d2, d3, d4, d5, b1, b2, b3, b4, b5];


//top seller display
function bs() {
  var im = document.getElementById("bestSeller");
  setInterval(function () {
    var randomItemIndex = Math.floor(Math.random() * 12);
    im.src = arrayOfItems[randomItemIndex].image;
  }, 2000);
}

bs();

//news image display
var newsarray = [
  "https://static.musiciansfriend.com/static/mf/selects/2021/r-home/mf-md-rhhs-rocktober-09-29-21.jpg",
  "https://b96685b3361076eb477d-e277a17226bd00b2999c6ea72df861f9.ssl.cf2.rackcdn.com/19guitarcench.jpg",
  "https://media.sweetwater.com/api/i/w-580__h-400__q-70__ha-0acbf32fcc971376__hmac-fc65a0274e693f4aca123a927e2ada0ca0281bac/sales/summer-drum-2021/06-SW-Promo-DrumMonth-LandingPage-FullWidthTile-Mobile-1160x800-2.jpg",
];
var image = document.getElementById("news");
var i = 0;
$("#news").click(function () {
  if (i > newsarray.length - 1) {
    i = 0;
  }
  image.src = newsarray[i];
  i++;
});
