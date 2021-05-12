(function () {
  "use strict";
  angular.module("LunchChecker", [])
    .controller("Checker", checker);
  checker.$inject = ["$scope"];
  function checker($scope) {
    $scope.check = function () {
      var dishes = $scope.dishes;
      var dish = dishes.split(",");
      var count = dish.length;
      for (var i = 0; i < dish.length; i++) {
        if (dish[i].trim() == "") {
          count--;
        }
      }
      var message = "";
      if (count == 0) {
        message = "Please enter data first";
      } else {
        if (count <= 3) {
          message = "Enjoy!";
        }
        if (count > 3) {
          message = "Too much!";
        }
      }
      $scope.message = message;
    }
  }
})();
