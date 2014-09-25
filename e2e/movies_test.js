describe('angularjs homepage todo list', function() {
    it('should see movies in theaters', function() {
        browser.get('http://localhost:9000');
        
        var moviesList = element.all(by.repeater('movie in movies'));
        expect(moviesList.count()).toEqual(16);
    });
});