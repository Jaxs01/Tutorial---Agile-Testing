angular.module('ng')
    .filter('without', function () {
      return function (items, field) {
        var result = {};
        angular.forEach(items, function (value, key) {
          if (!(value == field || key == field)) {
            result[key] = value;
          }
        });
        return result;
      };
    })
    .filter('only', function () {
      return function (items, field) {
        var result = {};
        angular.forEach(items, function (value, key) {
          if ((value == field || key == field)) {
            result[key] = value;
          }
        });
        return result;
      };
    });