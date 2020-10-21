'use strict';
(function() {
  var pinWidth = 50;
  var pinHeight = 70;
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  window.isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  // Обработчик клика по пину похожего объявления
window.pinIconClickHandler = function (evt) {
  var targetPin = evt.target;
  // Проверка нужна для того, чтобы клик адекватно работал на всём пине
  var noticeImg = targetPin.firstChild ? targetPin.firstChild.src : targetPin.src;
  noticeImg.toString();
  var num = (noticeImg[noticeImg.length - 5] - 1);
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.map__pins');
  window.closePopup();
  fragment.appendChild(renderPopup(offersArray[num]));
  similarListElement.appendChild(fragment);

  var closeButton = document.querySelector('.map__pins').querySelector('.popup__close');
  closeButton.addEventListener('click', window.closePopup);
  closeButton.addEventListener('keydown', function (evtEnter) {
    window.isEnterEvent(evtEnter, window.closePopup);
  });
  document.addEventListener('keydown', function (evtEsc) {
    window.isEscEvent(evtEsc, window.closePopup);
  });

};


// Установка пинов похожих объявлений по карте
window.setupPins = function () {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.map__pins');
  for (var n = 0; n < offersArray.length; n++) {
    fragment.appendChild(window.renderPins(offersArray[n]));
  }
  similarListElement.appendChild(fragment);
};


  /// Отрисовка пинов
window.renderPins = function (renderingOffer) {
  var pinTemplate = document.querySelector('template').content;
  var pinElement = pinTemplate.cloneNode(true);
  var pinIcon = pinElement.querySelector('.map__pin');
  pinIcon.querySelector('img').src = renderingOffer.author.avatar;
  pinIcon.style.left = (renderingOffer.location.x + pinWidth / 2) + 'px';
  pinIcon.style.top = (renderingOffer.location.y + pinHeight) + 'px';
  pinIcon.addEventListener('click', pinIconClickHandler);
  return pinIcon;
};
window.closePopup = function() {
  var similarListElement = document.querySelector('.map__pins');
  var articles = similarListElement.querySelector('article');
  if (articles) {
    similarListElement.removeChild(articles);
  }
};

window.renderFoto = function() {

}
})();