describe('FizzBuzz', function () {
    it('is a function', function () {
        expect(typeof fizzBuzz).toBe('function');
    });
    it('returns 1 for 1', function () {
        expect(fizzBuzz(1)).toEqual(1);
    });
    it('returns 2 for 2', function () {
        expect(fizzBuzz(2)).toEqual(2);
    });
    it('returns fizz for 3', function () {
        expect(fizzBuzz(3)).toEqual('fizz');
    });
    it('returns fizz for 6', function () {
        expect(fizzBuzz(6)).toEqual('fizz');
    });
    it('returns buzz for 5', function () {
        expect(fizzBuzz(5)).toEqual('buzz');
    });
    it('returns buzz for 10', function () {
        expect(fizzBuzz(10)).toEqual('buzz');
    });
    it('returns fizzbuzz for 15', function () {
        expect(fizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('returns fizzbuzz for 30', function () {
        expect(fizzBuzz(30)).toEqual('fizzbuzz');
    });
})