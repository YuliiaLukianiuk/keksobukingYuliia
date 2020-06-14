(function() {
  window.map = document.querySelector('.map');
  window.mapPinsBlock = document.querySelector('.map__pins');
  window.noticeForm = document.querySelector('.notice__form');
  window.mapPin = document.querySelector('template').content.querySelector('.map__pin');
  window.mapPinMain = document.querySelector('.map__pin--main');
  window.mapPinImage = document.querySelector('template').content.querySelector('.map__pin').querySelector('img');
  window.fragment = document.createDocumentFragment();
  window.adList = [];

  var offerType = ['flat', 'house', 'bungalo'];
  var titleList = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец',
    'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
    'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var checkTimeList = ['12:00', '13:00', '14:00'];
  var PRICE = {
    MIN: 1000,
    MAX:1000000
  };
  var ROOMS = {
    MIN: 1,
    MAX: 5
  };
  var MAX_GUEST = 10;
  
  var getRandomAd = function () {
    for (var i = 1; i <= 8; i++) {
      var randomAd = {
        'author': {
          'avatar': 'img/avatars/user0' + i + '.png'
        },
        'offer': {
          'title': titleList[i - 1],
          'address': 'x' + ',' + ' y',
          'price': window.units.getRandomInteger(PRICE.MIN, PRICE.MAX),
          'type': window.units.getRandomArrElement(offerType),
          'rooms': window.units.getRandomInteger(ROOMS.MIN, ROOMS.MAX),
          'guests': window.units.getRandomInteger(1, MAX_GUEST),
          'checkin': window.units.getRandomArrElement(checkTimeList),
          'checkout': window.units.getRandomArrElement(checkTimeList),
          'features': window.units.getRandomArray(featuresList),
          'description': '',
          'photos': ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
        },
  
        'location': {
          'x': window.units.getRandomInteger(300, 900),
          'y': window.units.getRandomInteger(130, 630)
        }
      };
      adList.push(randomAd);
    }
    return adList;
  }
  getRandomAd();
    
})();