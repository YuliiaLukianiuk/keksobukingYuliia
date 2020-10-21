'use strict';
(function() {
  var FILE__TYPE = ['jpg','png','gif','jpeg'];
  //компонент который грузит аватар
var fileChooser = document.querySelector('.upload input[type = file]');
var photoConatiner = document.querySelector('.ad-form__upload input[type = file]')
  //картинка куда будем выставлять загруженное изображение
var preview = document.querySelector('.change-avatar');
var previewHouse = document.querySelector('.ad-form__photo-container');

fileChooser.addEventListener('change', function() {
var file = fileChooser.files[0];
var fileName = file.name.toLowerCase();
var matches = FILE__TYPE.some(function(it) {
  return fileName.endsWith(it);
});
if(matches) {
  var reader = new FileReader();
  reader.addEventListener('load', function() {
    preview.src = reader.result;
  });
  reader.readAsDataURL(file);
}
});

photoConatiner.addEventListener('change', function() {
  var file = photoConatiner.files[0];
  var fileName = file.name.toLowerCase();
  var matches = FILE__TYPE.some(function(it) {
    return fileName.endsWith(it);
  });
  if(matches) {
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      previewHouse.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
  });
})();