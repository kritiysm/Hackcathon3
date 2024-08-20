function maxmin(numArr) {
   let max = maxnum(numArr);
   let min = minnum(numArr);
   return [max, min];
}

function maxnum(numArr) {
   let max = numArr[0];
   for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] > max) {
         max = numArr[i]
      }

   }
   return max;
}
function minnum(numArr) {
   let min = numArr[0];
   for (let i = 1; i < numArr.length; i++) {
      if (numArr[i] < min) {
         min = numArr[i]
      }
   }
   return min;
}
console.log(maxmin([2, 8, 5, 1]))