(function() {
//генерация меток на карте
window.renderPin = function () {
  for (var i = 0; i < window.adList.length; i++) {
    var cloneMapPin = window.mapPin.cloneNode();
    var cloneImageMapPin = window.mapPinImage.cloneNode();
    cloneMapPin.style.left = window.adList[i].location.x - 35 + 'px';
    cloneMapPin.style.top = window.adList[i].location.y - 75 + 'px';
    cloneImageMapPin.src = window.adList[i].author.avatar;
    cloneImageMapPin.style.width = '40px';
    cloneImageMapPin.style.height = '40px';
    //Добавляет новый атрибут или изменяет значение существующего атрибута у выбранного элемента.
    cloneImageMapPin.setAttribute('draggable', true);
    cloneMapPin.appendChild(cloneImageMapPin);
    fragment.appendChild(cloneMapPin);
  }
};
renderPin();

})();