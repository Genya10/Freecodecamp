//1
function myLocalScope() {
  const myVar=10;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  //console.log('outside myLocalScope', myVar);

//2
const outerWear = "T-Shirt";
function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}
myOutfit();

//3
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum = sum +5;
}
addThree();
addFive();

//4
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed =  processArg(7);

//5
function nextInLine(arr, item) {
    arr.push(item);
    const shift = arr.shift();
    return shift;
  }

  let testArr = [1, 2, 3, 4, 5];

  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));