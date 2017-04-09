console.log("client.js sourced");

var movieApp = angular.module('movieApp', []);

movieApp.controller('SearchController', ['$scope', '$http', 'MovieService', function($scope, $http, MovieService){
  console.log("inside SearchController");
  MovieService.getOMDB();
  console.log(MovieService.getOMDB());
  $scope.movieFromOMDB = MovieService.movieFromOMDB;
}]);

movieApp.controller('FavoritesController', ['$scope', '$http', 'MovieService', function($scope, $http, MovieService){
  console.log("inside DisplayController");
}]);

movieApp.factory('MovieService', ['$http', function($http){
  console.log("inside MovieService");
  var movieFromOMDB = {};
  console.log("1st: ", movieFromOMDB);

  return{
    movieFromOMDB: movieFromOMDB,
    getRequest: function(response){
      $http.get('/movie').then(function(response){
        movieFromOMDB.response = response;
        console.log("get movie ", response);
      });
    },
    getOMDB : function (){
      var movie = 'Jaws';
      $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=full&r=json').then(function(response){
        console.log("omdb ", response);
      });
    }
  };
}]);
