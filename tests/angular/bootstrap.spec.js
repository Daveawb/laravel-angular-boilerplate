ngDescribe({
    name: 'Test bootstrap',
    modules: 'Application',
    tests: function(deps) {
        it('should request email verification successfully', function() {
           return true;
        });
    }
});