/**
 * Describe -> descreve o que você está testando
 *  it() descreve o comportamento esperado
 */
const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;
//-> Com chai
describe('Math class', function() {

    // hooks
    beforeEach(function() {
        value = 0;
    })
    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.asyncSum(value, 5, value => {
            expect(value).to.equal(10);
     
            done();
        });
    });
// utilizando on it.only apenas este teste irá ser executado 
// se utilizarmos o it.skip o teste será ignorado

    it('Multiply two numbers', function(){
        const math = new Math();

        expect(math.multiply(value, 5)).to.equal(0);// aqui não vai passar pois o value será 0
    });
});

// -> Com assert
// describe('Math class', function() {

//     // hooks
//     beforeEach(function() {
//         value = 0;
//     })
//     it('Sum two numbers', function (done) {
//         const math = new Math();
//         this.timeout(3000);

//         value = 5;

//         math.asyncSum(value, 5, value => {
//             assert.strictEqual(value, 10);
     
//             done();
//         });
//     });
// // utilizando on it.only apenas este teste irá ser executado 
// // se utilizarmos o it.skip o teste será ignorado

//     it('Multiply two numbers', function(){
//         const math = new Math();

//         assert.strictEqual(math.multiply(value, 5), 25);// aqui não vai passar pois o value será 0
//     });
// });