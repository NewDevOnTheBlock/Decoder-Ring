// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // create parallel arrays for my alphabet and substitutes
  const myAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!input || typeof input !== "string" || !alphabet || alphabet.length !== 26) {
      return false;
    } else {
      const alphaArray = alphabet.split('');
      if (alphaArray.some((value, index, array) => array.lastIndexOf(value) != index)) {
        return false;
      }
    }
    // create a variable to save my message to
    let mySecretMessage = "";
    // create a variable to save our message to lowercase letters
    const lowercase = input.toLowerCase();
    // if the messsage is being encoded
    if (encode) {
      // loop through the message
      for (let i = 0; i < lowercase.length; i++) {
        // grab each letter of the message one at a time as it loops
        let currentLetter = lowercase[i];
        // find the current index of that letter within the alphabet
        let currentIndex = myAlphabet.indexOf(currentLetter)
        // within the substitutes find the index parallel to the index of my current letter of the alphabet
        let newLetter = alphabet[currentIndex]
        // if my new letter is undefined it must not be a letter, so leave as is
        if (typeof newLetter === "undefined") {
          newLetter = currentLetter;
        }
        // add my new letter to my message for each one that has been altered
        mySecretMessage += newLetter;
      }
      // gimme that secret sauce
      return mySecretMessage;

      // if I'm decoding instead of encoding
    } else {
      // loop through the phrase
      for (let i = 0; i < lowercase.length; i++) {
        // grab each letter from the phrase
        let currentLetter = lowercase[i];
        // check the letters index of our substitutes
        let currentIndex = alphabet.indexOf(currentLetter)
        // take the index and search the regular alphabet for it
        let newLetter = myAlphabet[currentIndex];
        // check if the letter is NOT a letter
        if (typeof newLetter === "undefined") {
          // put that symbol/number/space back in
          newLetter = currentLetter;
        }
        // add our letters to the secret message decoded
        mySecretMessage += newLetter;
      }
      // gimme that secret sauce
      return mySecretMessage;
    }

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
