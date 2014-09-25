(function () {
    'use strict';
    
    angular.module('favorites', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/favorites', {
                    templateUrl: 'components/favorites/favorites.html',
                    controller: 'FavoritesCtrl'
                });
        }])
        .controller('FavoritesCtrl', [function () {
             
        }]);
}());