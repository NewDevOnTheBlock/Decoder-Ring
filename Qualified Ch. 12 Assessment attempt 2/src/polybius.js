// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  // create two variables that store my letter + number in two parallel arrays at the exact same index
  const alphabet = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "(i/j)", "k",
    "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
  ];

  const polybiusSquare = [
    "11", "21", "31", "41", "51",
    "12", "22", "32", "42", "52",
    "13", "23", "33", "43", "53",
    "14", "24", "34", "44", "54",
    "15", "25", "35", "45", "55"
  ];

  // helper functions //

  const splitEveryTwoNums = numberString => {
    const separatedLetters = [];
    for (let index = 0; index < numberString.length; index += 2) {
      separatedLetters.push(numberString.slice(index, index + 2));
    }
    return separatedLetters;
  }

  // function body //

  function polybius(input, encode = true) {
    if (!input) {
      return false
    }
    if (encode) {
      // set my input to lowercase for translation
      const lowercase = input.toLowerCase();
      // create a string to save my message to
      let mySecretMessage = "";
      // loop through my message
      for (let i = 0; i < lowercase.length; i++) {
        // while looping, grab each letter one at a time and save them to a variable
        let currentLetter = lowercase[i];
        // if my current letter is I or J, change the current letter to the combo "i/j"
        if (currentLetter === "i" || currentLetter === "j") {
          currentLetter = "(i/j)";
        }
        // check the index of my current letter in my alphabet array, save it to a variable
        let alphaNumericIndex = alphabet.indexOf(currentLetter);
        // use that index to find the number that represents my letter
        let myPolybius = polybiusSquare[alphaNumericIndex];
        // if my polybius is undefined, it is a space, so change it to a space to represent that
        if (typeof myPolybius === "undefined") {
          myPolybius = " ";
        }
        // add myPolybius variable to my message, and start the loop again until no letters remain
        mySecretMessage += myPolybius;
      }
      // return my secret message encoded
      return mySecretMessage;

      // if the encode is set to false, begin the decoding process
    } else {
      // create a variable to store my messasge to
      let mySecretMessage = [];
      // split my current input into an array with each word as a different element
      const encodedMessage = input.split(' ');
      // loop through the array
      for (let i = 0; i < encodedMessage.length; i++) {
        // each index of the array holds a word, as it loops grab that word and store it
        let currentWord = encodedMessage[i];
        // if the length of the current word is odd then return false
        if (currentWord.length % 2 === 1) {
          return false;
        }
        // create a new variable for my decoded word
        let decodedWord = [];
        // since the word is still encoded, separate every two numbers into different strings, store in an array
        let separatedByLetter = splitEveryTwoNums(currentWord);
        // for each number pair in our array that was separated
        separatedByLetter.forEach(letter => {
          // get the index of the number pair from our array and find its index in the polybius square
          let polybiusIndex = polybiusSquare.indexOf(letter);
          // take that index and use it to find the same letter of the parallel alphabet array
          let translatedLetter = alphabet[polybiusIndex];
          // push the letters to decodedWord as they're translated
          return decodedWord.push(translatedLetter);
        })
        // add the decoded word into mySecretMessage, join all of the letters in the array into a string
        mySecretMessage.push(decodedWord.join(''))
      }
      // return the decoded message, join the separate arrays with a space
      return mySecretMessage.join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
