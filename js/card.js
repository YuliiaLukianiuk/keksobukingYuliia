(function() {
  //card
  var featureFragment = document.createDocumentFragment();
  var pictureFragment = document.createDocumentFragment();
  var cardCopy = mapCard.cloneNode(true);
  var mapCard = document.querySelector('template').content.querySelector('.map__card');
  
  

window.renderCard = function () {
  var getOfferTypeTranslate = function () {
    if (window.adList[0].offer.type === 'bungalo') {
      cardCopy.querySelector('h4').textContent = 'Бунгало';
    } else if (window.adList[0].offer.type === 'flat') {
      cardCopy.querySelector('h4').textContent = 'Квартира';
    } else if (adList[0].offer.type === 'house') {
      cardCopy.querySelector('h4').textContent = 'Дом';
    }
    return cardCopy.querySelector('h4').textContent;
  };
  getOfferTypeTranslate();

  var renderFeaturesList = function () {
    for (var i = 0; i < window.adList[0].offer.features.length; i++) {
      var featureList = document.createElement('li');
      featureList.classList.add('feature', 'feature--' + window.adList[0].offer.features[i]);
      featureFragment.appendChild(featureList);
    }
    cardCopy.querySelector('.popup__features').innerHTML = '';
    cardCopy.querySelector('.popup__features').appendChild(featureFragment);
    cardCopy.querySelector('.popup__features').nextSibling.textContent = window.adList[0].offer.description;
  };
  renderFeaturesList();

  cardCopy.querySelector('h3').textContent = window.adList[0].offer.title;
  cardCopy.querySelector('p').querySelector('small').textContent = window.adList[0].offer.adress;
  cardCopy.querySelector('.popup__price').textContent = window.adList[0].offer.price + '&#x20bd;/ночь';

  cardCopy.querySelector('h4').nextElementSibling.textContent = window.adList[0].offer.rooms +
    ' комнаты для ' + window.adList[0].offer.guests + ' гостей';
  cardCopy.querySelector('h4').nextElementSibling.nextElementSibling.textContent = 'Заезд после ' + window.adList[0].offer.checkin + ' выезд до ' + window.adList[0].offer.checkout;

var renderPictures = function () {
  for (var i = 0; i < window.adList[0].offer.photos.length; i++) {
    var picturesList = document.createElement('li');
    var picturesImgTag = document.createElement('img');
    picturesImgTag.src = adList[0].offer.photos[i];
    picturesList.appendChild(picturesImgTag);
    pictureFragment.appendChild(picturesList);
  }
  cardCopy.querySelector('.popup__pictures').innerHTML = '';
  cardCopy.querySelector('.popup__pictures').appendChild(pictureFragment);
};
  renderPictures();

  var renderAvatar = function () {
    cardCopy.querySelector('.popup__avatar').src = adList[0].author.avatar;
  };
  renderAvatar();
};

})();