(function() {
  window.units =  {
    getRandomInteger : function (min, max) {
      var randomInteger = min + Math.random() * (max + 1 - min);
      randomInteger = Math.floor(randomInteger);
      return randomInteger;
    },
     getRandomArray : function (arr) {
      var obj = {};
      for (var i = 0; i <= window.units.getRandomInteger(1, arr.length); i++) {
        var randomElement = window.units.getRandomArrElement(arr);
        obj[randomElement] = true;
      }
      return Object.keys(obj);
    },
     getRandomArrElement : function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    }
  };
})();