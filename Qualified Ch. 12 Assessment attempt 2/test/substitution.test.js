// Write your tests here!
const{substitution} = require('../src/substitution')

const expect = require('chai').expect;

describe("substitution", () => {
    it("Should retun a string of subsituted letters", () => {
        let input = "thinkful";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });
    it("Should return a string of all lowercase letters", () => {
        let input = "You are an excellent spy";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.equal(expected);
    });
    it("Should decode a string", () => {
        let input = "jrufscpw";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        let actual = substitution(input, alphabet, (encode = false));
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });
    it("Should return a string with symbols and spaces included", () => {
        let input = "message";
        let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });
    it("Should decode a message that contains symbols", () => {
        let input = "y&ii$r&";
        let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, (encode = false));
        const expected = "message";
        expect(actual).to.equal(expected);
    });
    it("Should return false if alphabet is not equal to 26 characters", () => {
        let input = "thinkful";
        let alphabet = "short";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("Should return false if the alphabet has repeating letters", () => {
        let input = "thinkful";
        let alphabet = "abcabcabcabcabcabcabcabcyz";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = false;
        expect(actual).to.equal(expected);
    });
});