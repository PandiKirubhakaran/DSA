// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
let sum = twoSum([1, 2, 3, 4, 5], 8);
console.log(sum, "sum...");

const twoPointer = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};

console.log(twoPointer([1, 2, 3, 4, 5, 6], 8));

const sumObject = (nums, target) => {
  // let obj={}
  // for(let i=0 ;i < nums.length;i++) {
  //   let n=nums[i]
  //   if(obj[target-n>=0]){
  //     return [obj[target-n],i]
  //   }
  //   else{
  //     return obj[n]=i
  //   }
  // }

  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(sumObject([2, 7, 11, 15], 26));

// nums = [2,7,11,15], target = 26
// {
//     "2":0,  // 26 - 2 = 24
//     "7": 1,
//     "11": 2,  // 26-11 = 15
//     "15":     // 26 - 15 = 11 => [obj[11],3] => [2, 3]
// }

/*Given the input array nums = [2, 7, 11, 15] and target = 26, let's go through the dry run step-by-step to see how the code processes this input:

Initial State
nums = [2, 7, 11, 15]
target = 26
obj = {} (An empty object to keep track of numbers and their indices)
Iteration Breakdown
First Iteration (i = 0):
n = nums[0] = 2
target - n = 26 - 2 = 24
Check: obj[24] (Does not exist in obj since obj is empty)
Update obj: Add 2 with its index to obj
obj = { 2: 0 } (Key is the number, value is its index)
Second Iteration (i = 1):
n = nums[1] = 7
target - n = 26 - 7 = 19
Check: obj[19] (Does not exist in obj)
Update obj: Add 7 with its index to obj
obj = { 2: 0, 7: 1 }
Third Iteration (i = 2):
n = nums[2] = 11
target - n = 26 - 11 = 15
Check: obj[15] (Does not exist in obj)
Update obj: Add 11 with its index to obj
obj = { 2: 0, 7: 1, 11: 2 }
Fourth Iteration (i = 3):
n = nums[3] = 15
target - n = 26 - 15 = 11
Check: obj[11] (Exists in obj, and its value is 2)
Return: [obj[11], 3] which is [2, 3]
Explanation of the Result
The function returns [2, 3] because the numbers at indices 2 and 3 in the array (11 and 15) add up to the target 26.
Final Output
The result of the function for this input is [2, 3]. */