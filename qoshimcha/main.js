// 1-masala (qoshimcha)
// https://leetcode.com/problems/richest-customer-wealth/

// function maximumWealth (accounts) {
//     let maxWealth = 0;
//     for (let i = 0; i < accounts.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < accounts[i].length; j++) {
//             sum += accounts[i][j];
//         }
//         if (sum > maxWealth) {
//             maxWealth = sum;
//         }
//     }
//     return maxWealth;
// };
// console.log(maximumWealth([[1,2,3],[3,2,1]]));



// 2-masala (qoshimcha)
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/ 

// function smallerNumbersThanCurrent (nums) {
//     let result = []
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
// for (let m = 0; m < nums.length; m++) {
// if (nums[i] > nums[m]) {
//     sum++
// }
// }
// result.push(sum)
// sum = 0
//     }
// return result
// };
// console.log(smallerNumbersThanCurrent([8,1,2,2,3]));


// 3-masala (qoshimcha)
// https://leetcode.com/problems/create-target-array-in-the-given-order/ 

// function createTargetArray (nums, index) {
//     const target = [];
//     for (let i = 0; i < nums.length; i++) {
//         target.splice(index[i], 0, nums[i]);
//     }
//     return target;
// };
// console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]));


// 4-masala (qoshimcha)
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/ 

// function maxProduct (nums) {
//     let max1 = 0, max2 = 0;
//     for (let num of nums) {
//         if (num > max1) {
//             max2 = max1;
//             max1 = num;
//         } else if (num > max2) {
//             max2 = num;
//         }
//     }
//     return (max1 - 1) * (max2 - 1);
// };
// console.log(maxProduct([3,4,5,2]));


// 5-masala (qoshimcha)
// https://leetcode.com/problems/jewels-and-stones/ 

// function numJewelsInStones (jewels, stones) {
//     let count = 0
//     for (let i = 0; i < jewels.length; i++) {
// for (let m = 0; m < stones.length; m++) {
// if (jewels[i] === stones[m]) {
//     count++
// }
// } 
//     }
//     return count
// };
// console.log(numJewelsInStones("aA", "aAAbbbb"));


// 6-masala (qoshimcha)
// https://leetcode.com/problems/maximum-69-number/ 

// function maximum69Number (num) {
//     const s = num.toString();
//     let chars = s.split('');
//     for (let i = 0; i < chars.length; i++) {
//         if (chars[i] === '6') {
//             chars[i] = '9';
//             break;
//         }
//     }
//     return parseInt(chars.join(''));
// };
// console.log(maximum69Number(9669));
