(function () {
  var noticeForm = document.querySelector('.notice__form');
  var fieldArray = noticeForm.querySelectorAll('fieldset');
  var mainPin = document.querySelector('.map__pin--main');
  var PIN_MAX_X = 1100;
  var PIN_MAX_Y = 600;


  var setMainPinAddress = function () {
    var startX = PIN_MAX_X / 2;
    var startY = PIN_MAX_Y / 2 + 70;
    var noticeAddress = document.querySelector('#address');
    noticeAddress.value = startX + ', ' + startY;
    noticeAddress.setAttribute('disabled', 'true');
  };
  
// Активирует форму и карту после события mouseup на пине
window.activateMainPin = function() {
  for (var i = 0; i < fieldArray.length; i++) {
    fieldArray[i].setAttribute('disabled', 'disabled');
  }
  var mainPinMouseupHandler = function () {
    document.querySelector('.map').classList.remove('map--faded');
    noticeForm.classList.remove('notice__form--disabled');
    for (i = 0; i < fieldArray.length; i++) {
      fieldArray[i].removeAttribute('disabled');
    }
    setMainPinAddress();
    window.setupPins();
    mainPin.removeEventListener('mouseup', mainPinMouseupHandler);
  };
  mainPin.addEventListener('mouseup', mainPinMouseupHandler);
  mainPin.addEventListener('keydown', function (evt) {
    window.isEnterEvent(evt, mainPinMouseupHandler);
  });
};

})();