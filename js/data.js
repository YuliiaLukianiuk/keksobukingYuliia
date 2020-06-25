'use strict';
(function() {

var OFFERTYPE = ['flat', 'house', 'bungalo'];
var TITLELIST = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец',
  'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var FEATURESLIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var CHECKTIMELIST = ['12:00', '13:00', '14:00'];
var PRICE = {
  MIN: 1000,
  MAX:1000000
};
var ROOMS = {
  MIN: 1,
  MAX: 5
};
var PHOTO = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
             'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
             'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var MAX_GUEST = 10;
  
window.generateOffers = function () {
  var adList = [];
  for (var i = 1; i <= 8; i++) {
    var locX = window.units.getRandomInteger(300, 900);
    var locY = window.units.getRandomInteger(130, 630);
    adList.push({
      "author": {
        "avatar": 'img/avatars/user0' + i + '.png'
      },
        
      "offer": {
        "title": TITLELIST[i - 1],
        "address": locX + ',' + locY,
        "price": window.units.getRandomInteger(PRICE.MIN, PRICE.MAX),
        "type": window.units.getRandomArrElement(OFFERTYPE),
        "rooms": window.units.getRandomInteger(ROOMS.MIN, ROOMS.MAX),
        "guests": window.units.getRandomInteger(1, MAX_GUEST),
        "checkin": window.units.getRandomArrElement(CHECKTIMELIST),
        "checkout": window.units.getRandomArrElement(CHECKTIMELIST),
        "features": window.units.getRandomArray(FEATURESLIST),
        "description": '',
        "photos": window.units.getRandomArray(PHOTO)
      },

      "location": {
        "x": locX,
        "y": locY
      }
    });
    }
  
  return adList;
};
window.activateMainPin();

})();