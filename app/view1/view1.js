'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'ProfileCtrl',
    controllerAs: 'ProfileViewModel'
  });
}])

.controller('ProfileCtrl', ['$scope','$resource', function($scope,$resource) {
  var vm = this;
  var profilePromise = $resource('https://qa.kissakired.com:8088/api/user/1011').get().$promise;
  profilePromise.then(function(result) {
    vm.titleSection = {
      name: result.name,
      address: result.location.esrCity + " " + result.location.esrState
    };
    vm.mapCardData = {
      imgUrl: "def"
    }
  });
}]);