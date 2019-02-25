angular.module('alertApp', [])
.controller('alertController', ['$scope', '$window', function($scope, $window){
$scope.alert= 'Salut !!';
$scope.doAlert= function(alert){
  $window.alert(alert);
};
}]);
