/* Question
Fix the code to rotate an array by k times and return rotated array using IIFE function

Code:

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();
*/


//Correct code
let arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
let k = 3;
(function (arr) {
    out = arr.slice(k, arr.length);
    for (let i = 0; i < k; i++) {
        out.push(arr[i])
    }
    console.log(out);
})(arr);