const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];
function minofarr(array) {
   if (array.length === 0 ){
    alert("Mảng rỗng");
    return;
   }
   let min = Infinity;
for(i = 0; i < array.length; i++) {
   if(min > array[i]) {
    min = array[i];
   }
}
return min;
}
let min1 = minofarr(arr1);
console.log(`min của mảng arr1 là: ${min1}`);
let min2 = minofarr(arr2);
console.log(`min của mảng arr2 là: ${min2}`);
let min3 = minofarr(arr3);
console.log(`min của mảng arr3 là: ${min3}`);
let min4 = minofarr(arr4);
console.log(`min của mảng arr4 là: ${min4}`);