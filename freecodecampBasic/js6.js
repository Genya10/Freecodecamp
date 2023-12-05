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

const array =[12,45,65];
let count = 0;
for(let i =0;i< array.length;i++){
  count += array[i];
}
console.log(count)

//4
function checkEqual(a, b) {
  return a === b ? "Equal":"Not Equal"
}
checkEqual(1, 2);

//5
function checkSign(num) {
  return num > 0 ? 'positive' 
   : num < 0 ? 'negative'
   : 'zero'
  }
  checkSign(10);

  //6
  function convertToInteger(str) {
    return parseInt(str)
 }
 convertToInteger("56")

 //7
 function convertToInteger(str) {
  return parseInt(str,2)
 }
 
 console.log(convertToInteger("10011"))


 //8
 function randomFraction() {
  return Math.random();
}

//9
function randomWholeNum() {
  return Math.floor(Math.random()*10);
}

//10
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(1,10))

//11
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i][prop] !== undefined) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Gooop", "likes"));
console.log(lookUpProfile("Akira", "asdf"));
console.log(lookUpProfile("Sherlock", "asdf"));