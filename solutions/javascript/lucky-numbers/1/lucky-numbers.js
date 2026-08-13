// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let array1NumAsStr = array1.join('');
  let array2NumAsStr = array2.join('');
  return Number(array1NumAsStr) + Number(array2NumAsStr);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let isPalindrome = true;
  let valueAsStr = String(value);
  for (let i = 0; i < Math.floor(valueAsStr.length / 2); i ++){
    if (valueAsStr[i] !== valueAsStr[valueAsStr.length - i - 1]){
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let errorMessage = '';
  if (input == undefined || input == null || input == ''){
    errorMessage = 'Required field';
  } else if (isNaN(input) || Number(input) === 0) {
    errorMessage = 'Must be a number besides 0';
  } else {
    errorMessage = '';
  }
  return errorMessage;
}
