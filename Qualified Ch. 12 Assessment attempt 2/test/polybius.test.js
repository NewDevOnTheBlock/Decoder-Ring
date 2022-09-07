// Write your tests here!
const{polybius} = require('../src/polybius')

const expect = require('chai').expect;

describe("polybius", () => {
    it("Should encode words to a string of numbers", () => {
        let input = "thinkful";
        const actual = polybius(input, (encode = true));
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });
    it("Should encode a phrase that has capital letters", () => {
        let input = "Hello world";
        const actual = polybius(input, (encode = true));
        const expected = "3251131343 2543241341";
        expect(actual).to.equal(expected);
    });
    it("Should decode a string of numbers into a phrase", () => {
        let input = "3251131343 2543241341";
        const actual = polybius(input, (encode = false));
        const expected = "hello world";
        expect(actual).to.equal(expected);
    });
    it("Should decode a string of numbers and return a word that contains (i/j)", () => {
        let input = "4432423352125413";
        const actual = polybius(input, (encode = false));
        const expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
    });
    it("Should return false if there is an odd number of letters", () => {
        let input = "44324233521254134";
        const actual = polybius(input, (encode = false));
        const expected = false;
        expect(actual).to.equal(expected);
    });
});
