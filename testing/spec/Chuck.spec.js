// Chuck.spec.js
describe('Chuck', function () {
    let chuck;
    const joke = 'Chuck Norris can divide by zero';
    const mockMath = Object.create(window.Math);
    mockMath.random = function () {
        return 0.5
    }
    window.Math = mockMath;
    beforeEach(function () {
        chuck = new Chuck();
    });
    describe('addJoke', function () {
        it('should add a joke', function () {
            // use the method
            chuck.addJoke(joke);
            expect(chuck.jokes).toContain(joke)
        });
    });
    describe('get random joke', function () {
        it('Math random should now return 0.5', function () {
            expect(Math.random()).toEqual(0.5);
        });
        it('should return a random joke', function () {
            expect(chuck.getRandomJoke()).toEqual('Chuck Norris is the only man to ever defeat a brick wall in a game of tennis')
        })
    })
});