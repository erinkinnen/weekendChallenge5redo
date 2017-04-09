console.log("client.js sourced");

var movieApp = angular.module('movieApp', []);

movieApp.controller('SearchController', ['$scope','MovieService', function($scope, MovieService){
  $scope.searchedMovie = MovieService.movieToSearch;
  // MovieService.getOMDB();
  $scope.searchMovie = MovieService.getOMDB;

}]);//end of SearchController

movieApp.controller('FavoritesController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.movieToSearch = MovieService.movieToSearch;
}]);//end of FavoritesController

movieApp.factory('MovieService', ['$http', function($http){

  var movieToSearch = {
    title: ''
  };

  var allFavoritesArray = [];

  var allFavoritesObject = {
    allFavoritesArray: allFavoritesArray
  };

  //Public
  return {
        movieToSearch : movieToSearch,
        allFavoritesObject : allFavoritesObject,

        getRequest : function(){
          $http.get('/movie').then(function(response){
            movieToSearch.response = response;
          });//end of getRequest
        },

        getOMDB : function(){
          var movie = movieToSearch.title;
          console.log("inside getOMDB: ", movie);
          $http.get('http://www.omdbapi.com/?t=' + movie +
          '&y=&plot=full&r=json').then(function(response){
          console.log(response);
          });//end of http get
        }//end of getOMDB

  };//end of return

}]);//end of factory
