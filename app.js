(function () {
  'use strict';
  angular.module("NameCalculator", [])
    .controller("NameController", controller);
  function controller ($scope, $filter, $injector) {
    $scope.name = "initial";
    $scope.format = function () {
      var func = $filter("uppercase");
      $scope.name = func($scope.name);
      console.log($injector.annotate(controller));
    }
  }
})();
