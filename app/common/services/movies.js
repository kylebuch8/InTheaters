(function () {
    'use strict';
    
    angular.module('services.movies', ['ngResource'])
        .factory('Movies', ['$resource', function ($resource) {
            var inTheatersUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=qdcwaccyw2tbd5yyk27mdfw2';
            
            function modifyPosterUrls(posters) {
                posters.original = posters.original.replace('_tmb', '_ori');
                posters.detailed = posters.detailed.replace('_tmb', '_det');
                posters.profile = posters.profile.replace('_tmb', '_pro');
                
                return posters;
            }
            
            return $resource(
                inTheatersUrl,
                {
                    callback: "JSON_CALLBACK"
                },
                {
                    query: {
                        method: "JSONP",
                        cache: true,
                        transformResponse: function (data) {
                            var movies = data.movies;
                            
                            angular.forEach(movies, function (movie) {
                                movie.posters = modifyPosterUrls(movie.posters);
                            });
                            
                            return data.movies;
                        },
                        isArray: true
                    }
                }
            );
        }]);
}());