(function () {
var map = document.querySelector('.map');
var mapPinsBlock = document.querySelector('.map__pins');
var noticeForm = document.querySelector('.notice__form');
var mapPinMain = document.querySelector('.map__pin--main');
//активируем форму по клику
  mapPinMain.addEventListener('mouseup', function(evt) {
  map.classList.remove('map--faded');
  noticeForm.classList.remove('notice__form--disabled');
  mapPinsBlock.appendChild(fragment);
  window.firstCoords();
  });

})();