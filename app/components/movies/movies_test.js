(function () {
    'use strict';
    
    describe('Movies Controller', function () {
        
        var moviesCtrl,
            scope;
        
        beforeEach(module('movies'));
        
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            
            moviesCtrl = $controller('MoviesCtrl', {
                $scope: scope
            });
        }));
                        
        it('should have a defined MoviesCtrl', function () {
            expect(moviesCtrl).toBeDefined();
        });
        
    });
}());