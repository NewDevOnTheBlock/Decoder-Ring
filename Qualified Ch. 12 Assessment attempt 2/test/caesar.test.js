// Write your tests here!
const expect = require('chai').expect;

const{caesar} = require('../src/caesar')

describe("caesar", () => {
    it("Should encode a message correctly ", () => {
        let input = 'thinkful';
        let shift = 3;
        const actual = caesar(input, shift, (encode = true));
        const expected = 'wklqnixo';
        expect(actual).to.equal(expected)
    });
    it("Should allow for a negative shift to the left", () => {
        let input = "thinkful";
        let shift = -3;
        const actual = caesar(input, shift, (encode = true));
        const expected = "qefkhcri";
        expect(actual).to.equal(expected);
    });
    it("Should decode a message", () => {
        let input = "wklqnixo";
        let shift = 3;
        const actual = caesar(input, shift, (encode = false));
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters", () => {
        let input = "This is a secret message!";
        let shift = 8;
        const actual = caesar(input, shift, (encode = true));
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters when decoding", () => {
        let input = "BPQA qa I amkzmb umaaiom!";
        let shift = 8;
        const actual = caesar(input, shift, (encode = false));
        const expected = "this is a secret message!";
        expect(actual).to.equal(expected);
    });
    it("Should return false if the shift is 0", () => {
        let input = 'thinkful';
        let shift = 0;
        const actual = caesar(input, shift, (encode = true));
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("Should return false if the shift is greater than 25", () => {
        let input = 'thinkful';
        let shift = 99;
        const actual = caesar(input, shift, (encode = true));
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("Should return false if the shift is greater than -25", () => {
        let input = 'thinkful';
        let shift = -26;
        const actual = caesar(input, shift, (encode = true));
        const expected = false;
        expect(actual).to.equal(expected);
    });
});