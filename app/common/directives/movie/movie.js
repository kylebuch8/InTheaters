(function () {
    'use strict';
    
    angular.module('directives.movie', [])
        .directive('itMovie', [function () {
            return {
                restrict: 'E',
                templateUrl: 'common/directives/movie/movie.html'
            };
        }]);
}());