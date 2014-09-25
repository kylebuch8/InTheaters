(function () {
    'use strict';
    
    describe('Favorites Controller', function () {
        
        var favoritesCtrl,
            scope;
        
        beforeEach(module('favorites'));
        
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            
            favoritesCtrl = $controller('FavoritesCtrl', {
                $scope: scope
            });
        }));
                        
        it('should have a defind FavoritesCtrl', function () {
            expect(favoritesCtrl).toBeDefined();
        });
        
    });
}());