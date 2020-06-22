'use strict';
(function() {
  //card
  window.POPUP_WIDTH = 230;
  window.POPUP_MARGIN = 10;
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var offersArray = window.generateOffers();
  var closePopup = document.querySelector('.popup__close');
  var popTemplate = document.querySelector('template').content;
  var popTemp = popTemplate.cloneNode(true);
  var popElement = popTemp.querySelector('.map__card');
  
  var renderPopup = function (renderingOffer) {
  popElement.querySelector('.popup__avatar').src = renderingOffer.author.avatar;
  popElement.querySelector('h3').textContent = renderingOffer.offer.title;
  popElement.querySelector('small').textContent = renderingOffer.offer.address;
  popElement.querySelector('.popup__price').textContent = renderingOffer.offer.price + ' \u20bd/ночь';
  
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

  var getRuType = function (type) {
    if (type === 'flat') {
      return 'Квартира';
    }
    if (type === 'bungalo') {
      return 'Бунгало';
    }
    return 'Дом';
  };
  popElement.querySelector('h4').textContent = getRuType(renderingOffer.offer.type);
  var elemStr = renderingOffer.offer.rooms + ' комнаты для ' + renderingOffer.offer.guests + ' гостей';
  popElement.querySelectorAll('p')[2].textContent = elemStr;
  elemStr = 'Заезд после ' + renderingOffer.offer.checkin + ', выезд до ' + renderingOffer.offer.checkout;
  popElement.querySelectorAll('p')[3].textContent = elemStr;
  var featuresElement = popElement.querySelector('.popup__features');
  while (featuresElement.firstChild) { // чистим перечень удобств из шаблона
    featuresElement.removeChild(featuresElement.firstChild);
  }
  for (var m = 0; m < renderingOffer.offer.features.length; m++) {
    var feature = document.createElement('li');
    feature.classList.add('feature');
    feature.classList.add('feature--' + renderingOffer.offer.features[m]);
    featuresElement.appendChild(feature);
  }
  popElement.querySelectorAll('p')[4].textContent = renderingOffer.offer.description;
  var photosElement = popElement.querySelector('.popup__pictures');
  for (m = 0; m < renderingOffer.offer.photos.length; m++) {
    var li = photosElement.querySelector('li').cloneNode(true);
    li.querySelector('img').src = renderingOffer.offer.photos[m];
    li.querySelector('img').width = (POPUP_WIDTH - 2 * POPUP_MARGIN) / renderingOffer.offer.photos.length;
    li.querySelector('img').height = 70;
    photosElement.append(li);
  }
  photosElement.querySelector('li').remove(); // удалить первый шаблонный элемент
  return popElement;
};
var closePopup = function() {
  var similarListElement = document.querySelector('.map__pins');
  var articles = similarListElement.querySelector('article');
  if (articles) {
    similarListElement.removeChild(articles);
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
  // closePopup();
  fragment.appendChild(renderPopup(offersArray[num]));
  similarListElement.appendChild(fragment);

  var closeButton = document.querySelector('.map__pins').querySelector('.popup__close');
  closeButton.addEventListener('click', closePopup);
  closeButton.addEventListener('keydown', function (evtEnter) {
    window.isEnterEvent(evtEnter, closePopup);
  });
  document.addEventListener('keydown', function (evtEsc) {
    window.isEscEvent(evtEsc, closePopup);
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


})();
