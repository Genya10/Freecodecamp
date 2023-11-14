//1
const someAdjective = "javascript";
let myStr = "Learning to code is ";
myStr += someAdjective;

//2
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

//3
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName[0];

//4
const myName = "Jenya";
const myStr1 = "My name is "+myName+"and I am well!";

//5
let myStr2 = "Jello World";
myStr2 = "Hello World";

//6
const lastName2 = "Lovelace";
const thirdLetterOfLastName = lastName[2];

//7
const lastName3 = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length-1];

//8
const lastName4 = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2];

//9
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The "+ myNoun +" "+ myAdjective +" "+ myVerb+" "+myAdverb +"."; // Change this line

//10
const myArray = ["bagel",5];

//11
const myArray1 = [["dog",3],["cat",8]];

//12
const myArray2 = [50, 60, 70];
const myData = myArray2[0];

//13
const myArray3 = [18, 64, 99];
myArray3[0]=45;

//14
const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];  
  const myData1 = myArray4[2][1];

//15
const myArray5 = [["John", 23], ["cat", 2]];
 myArray5.push(["dog", 3]); 

 //16
 const myArray6 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray6.pop();

//17
const myArray7 = [["John", 23], ["dog", 3]];
const removedFromMyArray1 = myArray7.shift();

//18
const myArray8 = [["John", 23], ["dog", 3]];
myArray8.shift();
myArray8.unshift(["Paul", 35]);

//19
const myList = [["chair",10],["couch",2],["table",4],["closet",3],["door",3]];

//20
function reusableFunction(){
  console.log('Hi World')
}
reusableFunction()

//21
function  functionWithArgs(arg1,arg2){
  console.log(arg1+arg2)
 }
 functionWithArgs(5,7)

 //23
 function timesFive(num){
  return num * 5;
}
timesFive(5);

//24
let myGlobal = 10;

function fun1() {
oopsGlobal =5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun2();