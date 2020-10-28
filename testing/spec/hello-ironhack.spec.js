// TODO
// Test Suite
describe('Hello ironhack function', function () {
    // spec
    it('Should be a function', function () {
        // matcher
        expect(typeof helloIronhack).toBe('function');
    });
    it('Should return a greeting', function () {
        expect(helloIronhack()).toEqual('hello ironhack');
    });
});