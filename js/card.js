'use strict';
(function() {
  //card
  window.POPUP_WIDTH = 230;
  window.POPUP_MARGIN = 10;
  window.offersArray = window.generateOffers();

  // var closePopup = document.querySelector('.popup__close');
  var popTemplate = document.querySelector('template').content;
  var popTemp = popTemplate.cloneNode(true);
  var popElement = popTemp.querySelector('.map__card');
  
  window.renderPopup = function (renderingOffer) {
  popElement.querySelector('.popup__avatar').src = renderingOffer.author.avatar;
  popElement.querySelector('h3').textContent = renderingOffer.offer.title;
  popElement.querySelector('small').textContent = renderingOffer.offer.address;
  popElement.querySelector('.popup__price').textContent = renderingOffer.offer.price + ' \u20bd/ночь';


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


  // window.cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  // var cardItem = window.cardTemplate.cloneNode(true);
  // var cardFeatures = cardItem.querySelector('.popup__features');
  //     if (renderingOffer.offer.features.length === 0) {
  //       cardFeatures.remove();
  //     }
  //     cardFeatures.innerHTML = '';
  //     cardFeatures.appendChild(createFragmentFeatures(renderingOffer.offer.features));
  //     cardItem.querySelector('.popup__description').textContent = renderingOffer.offer.description;
     

  var featuresElement = popElement.querySelector('.popup__features');
  popElement.querySelectorAll('p')[4].textContent = renderingOffer.offer.description;

  while (featuresElement.firstChild) { 
    // чистим перечень удобств из шаблона
    featuresElement.removeChild(featuresElement.firstChild);
  }
  for (var m = 0; m < renderingOffer.offer.features.length; m++) {
    var feature = document.createElement('li');
    feature.classList.add('feature');
    feature.classList.add('feature--' + renderingOffer.offer.features[m]);
    featuresElement.appendChild(feature);
  }


  window.photosElement = popElement.querySelector('.popup__pictures');

  for (m = 0; m < renderingOffer.offer.photos.length; m++) {
  if(m===3) {
    break;
  }
    var li = photosElement.querySelector('li').cloneNode(true);
    li.querySelector('img').src = renderingOffer.offer.photos[m];
    li.querySelector('img').width = '40';
    li.querySelector('img').height = '40';
    photosElement.append(li);

  }
  photosElement.querySelector('li').remove(); // удалить первый шаблонный элемент
  return popElement;
};
})();
