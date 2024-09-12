// The two-pointer approach is a common algorithmic technique used to solve problems involving arrays or lists. It involves using two pointers to iterate through the data structure, often to find a pair of elements that satisfy a certain condition. This approach is particularly useful for problems related to searching, sorting, and manipulating arrays.

/*
in this method we can only use the sorted array to solve the probelm

in detail explaination how it is working
l =>left,r=>right

How it Works:

Scenario 1

Eg. let arr=[1,2,3,4,5,6] target=9
step 1:
1 2 3 4 5 6 
l         r
 =>1+6=7<9
 if less than move left side 

step 2:
1 2 3 4 5 6 
  l       r
 =>2+6=8<9
 if less than move left side 

step 3:
1 2 3 4 5 6 
    l     r
 =>3+6=9==9
 its true so we can take the value or index (value=>3+6,index=>2,5) 

 Scenario 2

 Eg. let Eg. let arr=[2,3,4,5,6] target=6

 step 1
 2 3 4 5 6 
 l       r
 =>2+6=8>6
  if greater than move right side 

  step 2
 2 3 4 5 6 
 l     r
 =>2+5=7>6
  if greater than move right side 

  step 3
 2 3 4 5 6 
 l   2
 =>2+6=6==6
 its true so we can take the value or index (value=>2+6,index=>0,2)
 
 Scenario 3
  Eg. let Eg. let arr=[2,3,4,6] target=7
 step 1
 2 3 4 6
 l     r
 =>2+6=8>7
   if greater than move right side 
step 2
 2 3 4 6
 l   r
 =>2+4=6<7
  if less than move left side 

step 3
  2 3 4 6
    l r
=>3+4=7==7
its true so we can take the value or index (value=>2+6,index=>0,2)
*/

/*
Here are some common scenarios where the two-pointer approach is used:

Finding pairs with a given sum:
Reversing an array:
Merging two sorted arrays:
Removing duplicates from a sorted array:

*/

//Finding pairs with a given sum:

const findingPair=(nums,target)=>{
   let left=0
   let right=nums.length-1
   while(left<right){
    //    console.log(left,right)
    let add=nums[left]+nums[right]
    if(add==target){
        return [left,right]
    }
    else if(add<target){
        left++
    }
    else{
        right--
    }
   }
   return [-1,-1]

}

// console.log(findingPair([1,3,5,7,10],12)) //[2,3]
// console.log(findingPair([1,3,5,7,10],100))//[-1,1]

//Reversing an array:

const reverseArray=(arr)=>{
    let left=0
    let right=arr.length-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        console.log(arr,'arr',arr[left],arr[right])
        left++
        right--
    }
    return arr
}

// console.log(reverseArray([2,3,4,5,6,7,9]))
// console.log(reverseArray([10,20,30]))

//Merging two sorted arrays:

const merging=(arr1,arr2)=>{
    let i=0;
    let j=0;
    let result=[]
    while(i<arr1.length && j<arr2.length){
      if(arr1[i]<arr2[j]){
          result.push(arr1[i])
          // console.log(result,'ans',arr1[i],'i',arr2[j]);
        i++
      }
      else{
        result.push(arr2[j])
        // console.log(result,'else ans',arr2[j])
        j++
      }
    }
    while(i<arr1.length){
        result.push(arr1[i])
        // console.log(result,'while i',arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        // console.log(result,'while j',arr2[j])
        j++
    }
    return result
}

// console.log(merging([1,2,3,4],[4,5,6,7,8]))

// Removing Duplicates from a Sorted Array

const removeDuplicate=(arr)=>{
if(arr.length==0) return 0
let left=0
for(let right=1;right<arr.length;right++){
  console.log(left,arr[left],'first',arr[right])

  if(arr[left]!==arr[right]){
    console.log(arr[left],'left',arr[right])
    left++
    console.log(left)
    arr[left]=arr[right]
    console.log(arr[left],'Ans',arr[right])
  }
}
return left+1

}
console.log(removeDuplicate([11,2,2,3,4,4,5]))