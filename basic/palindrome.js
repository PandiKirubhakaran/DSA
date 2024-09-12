// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

var isPalindrome = function (x) {
  return x < 0 ? false : x===+x.toString().split("").reverse().join('')
};
const res = isPalindrome(0);
console.log(res); //01

//Simple String Reversal Approach 
function reversalApproach(input) {
  const str = input.toString();  // Convert input to string
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');  // Clean string: ignore special characters
  return cleanedStr === cleanedStr.split('').reverse().join('');  // Compare reversed string
}
console.log(reversalApproach(121),'reversalApproach')
console.log(reversalApproach('kiru'),'reversalApproach')

function twoPointer(input) {
  const str = input.toString();  // Convert input to string
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    console.log(cleanedStr[left],cleanedStr[right])
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;  // Not a palindrome
    }
    left++;
    right--;
  }
  return true;
}

console.log(twoPointer(121),'two pointer');      // true
console.log(twoPointer(123),'two pointer');      // false
console.log(twoPointer(1221),'two pointer');     //true

function everyApproch(input) {
  const str = input.toString();  // Convert input to string
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr.split('').every((char, i) => char === cleanedStr[cleanedStr.length - 1 - i]);
}
console.log(everyApproch(121),'everyApproch');      // true
console.log(everyApproch(123),'everyApproch');      // false
//dry run
// cleanedStr.split('') turns the string into an array: ['r', 'a', 'c', 'e', 'c', 'a', 'r'].

// The every() method checks each character as follows:

// Index i	char (forward)	cleanedStr[cleanedStr.length - 1 - i] (reverse)	Comparison
// 0	'r'	'r'	true
// 1	'a'	'a'	true
// 2	'c'	'c'	true
// 3	'e'	'e'	true
// 4	'c'	'c'	true
// 5	'a'	'a'	true
// 6	'r'	'r'	true

function forLoop(input) {
  const str = input.toString();  // Convert input to string
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (let i = 0, len = cleanedStr.length; i < len / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(forLoop(12121),'forLoop');      // true