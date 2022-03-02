#! npm test ./tests/4-longest.js

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {
  // O(n) time | O(1) space
  const arrayOfStringsFlattened = strings.flat(1);
  let longestStr = '';
  arrayOfStringsFlattened.forEach((str) => {
    if(str.length > longestStr.length) {
      longestStr = str;    
    }   
  }) 
  return longestStr;  
}
