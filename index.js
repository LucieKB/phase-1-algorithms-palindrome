// I want to write a function that can return true if a wor dis a plyndrome, meaning that we can read it backwards and get the same word as we started with, and false otherwise.

function isPalindrome(word) {
  let wordArray = word.split('');
  let arrayLength = wordArray.length;
    for(let i=0; i<arrayLength; i++){
      if (wordArray[i] === wordArray[wordArray.length-(i+1)]){
      return true
   }
   else {
      return false
    }
 }
}


// function Evenword(wordArray){
//   let arrayLength = wordArray.length;
//   for(let i=0; i<arrayLength;i++){
//     if (wordArray[i] === wordArray[arrayLength(-(1+i))]){
//       return true
//     }
//     else {
//       return false
//     }
//   }
// }

// function Oddword(wordArray){
//   let arrayLength = wordArray.length;
//   for(let i=0; i<(arrayLength);i++){
//     if (wordArray[i] === wordArray[arrayLength(-(1+i))] && wordArray[Math.ceil(arrayLength/2)] === wordArray[Math.ceil(arrayLength/2)] ){
//       return true
//     }
//     else {
//       return false
//     }
//   }
// }

// isPalindrome("robot")

/* 
  Add your pseudocode here
*/
// 1. convert the string (word) into an array using word.split(''), name this array 
// 2. create an switch function that if the first letter of wordLetterArray === the last one, and so on for each letter of the word.
// In this function, define the array.length and question if it is odd or even, create a case that if it is odd, the middle letter doesn't matter



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
  // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

module.exports = isPalindrome;