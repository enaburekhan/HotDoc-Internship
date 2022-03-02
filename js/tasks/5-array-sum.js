#! npm test ./tests/5-array-sum.js

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} startOfTree An array containing other arrays, ints, strings..
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */
export default function arraySum(startOfTree) {
 //   O(n) time | O(1) space  
 const flattenedArray = startOfTree.flat(Infinity) 
 let sum = 0;
 for(let i = 0; i < flattenedArray.length; i++){
     if(Number.isInteger(flattenedArray[i])){
         sum += flattenedArray[i]
     }
 }
  return sum  
}
