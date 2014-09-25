(function () {
    'use strict';
    
    angular.module('movies', ['ngRoute', 'services.movies', 'directives.movie'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'components/movies/movies.html',
                    controller: 'MoviesCtrl'
                });
        }])
        .controller('MoviesCtrl', ['$scope', 'Movies', function ($scope, Movies) {
            $scope.movies = Movies.query();
        }]);
}());