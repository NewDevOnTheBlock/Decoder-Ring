// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    if(!input || typeof input !== "string" || !shift || typeof shift !== "number") {
      return false;
    } else {
      if (shift > 25 || shift === 0 || shift < -25) {
        return false;
      }
    }
    // set my input to lowercase store it in a variable
    const lowercase = input.toLowerCase();
    // create a variable for my message
    let mySecretMessage = "";
    if (encode) {
      for (let i = 0; i < lowercase.length; i++) {
        // create a variable for the current letter
        let currentLetter = lowercase[i];
        // create a variable to store my index at, leave unassigned for now
        let alphabetIndex = alphabet.indexOf(currentLetter);
        // check if the current letter is a space, if it is, just reinsert it back in
        if (!currentLetter.match(/[a-z]/i)) {
          mySecretMessage += currentLetter;
        } else {
          // if the sum of my alphabet index and my shift is less than zero
          if (alphabetIndex + shift < 0) {
            // add 26 to my alphabetIndex
            alphabetIndex += 26;
          }
          // add/subtract the number from the index of our current alphabet character index
          let alphaShift = alphabetIndex + shift;
          // use that index to get our new letter
          let myNewLetter = alphabet[alphaShift];
          // add each new letter to the secret message
          mySecretMessage += myNewLetter;
        }
      }
      return mySecretMessage
    } else {
      // loop through my message
      for (let i = 0; i < lowercase.length; i++) {
        // while looping capture each letter of my message one at a time
        let currentLetter = lowercase[i];
        // grab the index of the current letter
        let alphabetIndex = alphabet.indexOf(currentLetter);
        // if my current letter is not a member of the abc club
        if (!currentLetter.match(/[a-z]/i)) {
          // then just add the symbol/space/number back in
          mySecretMessage += currentLetter;
          // otherwise
        } else {
          // create a variable for our new shift
          let newShift = shift;
          // if our shift is negative, newShift is the sum of that negative number times two added back into itself
          if (shift < 0) {
            newShift = shift + (shift * -2);
            // if the shift is positive, newShift is the result of subtracting shift times two from itself
          } else {
            newShift = shift - (shift * 2);
          }
          // if my alphabet index is less than zero after subtracting the shift, change that index to the same
          // letter later in my alphabet string
          if (alphabetIndex - shift < 0) {
            alphabetIndex += 26;
          }
          let alphaIndex = alphabetIndex + newShift;
          const myNewLetter = alphabet[alphaIndex];
          mySecretMessage += myNewLetter;
        }
      }
    } 
    return mySecretMessage
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
