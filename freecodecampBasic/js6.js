//1
  function multiplyAll(arr) {
    let product = 1;
    for(let i = 0; i < arr.length;i++){
      for(let j = 0; j < arr[i].length; j++){
        product *= arr[i][j]
      }
    }
    return product;
  }

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//2
const myArray = [];
let i = 10;

do{
    myArray.push(i);
  i++;
  console.log(myArray)
}
while (i < 10) {
}

//3
function sum(arr, n) {
    if (n === 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
console.log(sum([2,4,6],3));
console.log(sum([6,8],0));
console.log(sum([0,2],2));



  