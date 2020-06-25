'use strict';
(function() {
var PIN_MIN_X = 300;
var PIN_MAX_X = 1100;
var PIN_MIN_Y = 150;
var PIN_MAX_Y = 600;

  window.noticeForm = document.querySelector('.notice__form');
  window.adressInput = noticeForm.querySelector('#address');
  var mapPinMain = document.querySelector('.map__pin--main');
  mapPinMain.querySelector('img').setAttribute('draggable', 'true');
  
  window.mapPinCoords = {
    x: mapPinMain.offsetLeft,
    y: mapPinMain.offsetTop
  };
  
  window.setMainPinAdress = function (x, y) {
    window.adressInput.value = x + ', ' + y;
    window.adressInput.setAttribute('disabled', 'true');
  };
  
  mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
  
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  
  window.moveHandler = function (moveEvt) {
    moveEvt.preventDefault();
  
  var shift = {
    x: startCoords.x - moveEvt.clientX,
    y: startCoords.y -  moveEvt.clientY
  };
  
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
  
    window.mapPinCoords = {
    x: mapPinMain.offsetLeft - shift.x,
    y: mapPinMain.offsetTop - shift.y
  };
  // Ограничим область установки пина
    if (window.mapPinCoords.x > PIN_MAX_X) {
      window.mapPinCoords.x = PIN_MAX_X;
    }
    if (window.mapPinCoords.y > PIN_MAX_Y) {
      window.mapPinCoords.y = PIN_MAX_Y;
    }
    if (window.mapPinCoords.x < PIN_MIN_X) {
      window.mapPinCoords.x = PIN_MIN_X;
    }
    if (window.mapPinCoords.y < PIN_MIN_Y) {
      window.mapPinCoords.y = PIN_MIN_Y;
    }
  
    mapPinMain.style.left = window.mapPinCoords.x + 'px';
    mapPinMain.style.top = window.mapPinCoords.y + 'px';
    window.setMainPinAdress(window.mapPinCoords.x, window.mapPinCoords.y);
    };
    var mouseupHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', window.moveHandler);
      document.removeEventListener('mouseup', mouseupHandler);
    };
      document.addEventListener('mousemove', window.moveHandler);
      document.addEventListener('mouseup', mouseupHandler);
    });


//   var offersArray;
// // Загрузить похожие объявления
// var getOffers = function (data) {
//   offersArray = data;
// };


// window.download(getOffers, window.errorHandler);
    })();