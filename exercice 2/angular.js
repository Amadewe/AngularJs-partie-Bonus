var showMessage = angular.module('message', []);
showMessage.controller('messController', function ($scope, $window) {
  $scope.displayAlert = function(message) {
    $window.alert(message);
  };
});
