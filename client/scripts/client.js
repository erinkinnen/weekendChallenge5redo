console.log("client.js sourced");

var movieApp = angular.module('movieApp', []);

movieApp.controller('SearchController', ['$scope', function($scope){
  console.log("inside SearchController");
}]);

movieApp.controller('DisplayController', ['$scope', function($scope){
  console.log("inside DisplayController");
}]);
