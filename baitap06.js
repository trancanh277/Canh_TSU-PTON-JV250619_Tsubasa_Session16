function tinhtong(arr) {
    const sum = arr.reduce((total, num) => {
        return total + num;
    }, 0);
    return sum;
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [1, 3, 5, 7, 9];

console.log(`sum arr1 = ${tinhtong(arr1)}`);
console.log(`sum arr2 = ${tinhtong(arr2)}`);
console.log(`sum arr3 = ${tinhtong(arr3)}`);
