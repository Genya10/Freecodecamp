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

  //6
  function welcomeToBooleans() {
    return true; 
  }

  //7
  function trueOrFalse(wasThatTrue) {
     if(wasThatTrue){
       return "Yes, that was true";
     }else{
       return "No, that was false";
     }  
  }

  //8
  function testEqual(val) {
    if (val==12) { 
      return "Equal";
    }
    return "Not Equal";
  } 
  testEqual(10);

  //9
  function testStrict(val) {
    if (val===7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);

  //10
  function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10");

  //11
  function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(10);

  //12
  function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  testStrictNotEqual(10);

  //13
  function testGreaterThan(val) {
    if (val>100) { 
      return "Over 100";
    }
    if (val>10) { 
      return "Over 10";
    } 
    return "10 or Under";
  }
  testGreaterThan(10);

  //14
  function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    } 
    if (val >= 10) { 
      return "10 or Over";
    }  
    return "Less than 10";
  }  
  testGreaterOrEqual(10);

  //15
  function testLessThan(val) {
    if (val<25) { 
      return "Under 25";
    }  
    if (val<55) { 
      return "Under 55";
    }  
    return "55 or Over";
  } 
  testLessThan(10);

  //16
  function testLessOrEqual(val) {
    if (val<=12) {  
      return "Smaller Than or Equal to 12";
    }  
    if (val<=24) {  
      return "Smaller Than or Equal to 24";
    } 
    return "More Than 24";
  }  
  testLessOrEqual(10);

  //17
  function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
   
    }
    return "No";
  }  
  testLogicalAnd(10);

  //18
  function testLogicalOr(val) { 
    if (val<10 || val>20) {
      return "Outside";
    }
    return "Inside";
  }
  
  testLogicalOr(15);