var appForm = angular.module('app', ['ngRoute']);

appForm.run(['$rootScope', function($rootScope){
  $rootScope.formButtons = [];
}]);

appForm.controller('appController', function($scope, $rootScope){
  $scope.regexText = /^[A-Z][A-Za-zéèê\-]+$/;
  // on crée un tableau vide en amont

  $scope.submit = function(){
    $rootScope.formButtons.push({
      name: $scope.name,
      subject: $scope.subject,
      email: $scope.email,
      message: $scope.message
    });
    console.log($rootScope.formButtons);
  };
});


appForm.config(['$routeProvider', function($routeProvider) {
  // Système de routage
  $routeProvider
  .when('/:id', {
    templateUrl: 'index1.html',
    controller: 'appController'
  });
}

]);
