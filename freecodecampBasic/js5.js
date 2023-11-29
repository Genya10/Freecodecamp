//1
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name = "Happy Coder";

  //2
  const myDog1 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog1.bark = "woof";

  //3
const myDog2 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog2.tails;

  //4
  function phoneticLookup(val) {

    const lookup ={
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo":"Easy",
      "foxtrot":"Frank"
    }
  let result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");

  //5
  function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else{
      return "Not Found";
    }
  }

  //6
  const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },{
    "artist":"Jo Cocer",
    "title":"Boys",
    "release_year": 1987,
    "formats":[
      "CD",
      "16T"
    ]
  }
];

//7
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents);

//8
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//9
const myArray = [];
let i = 5;
while( 0 <= i){
  myArray.push(i);
  i--
}

//10
const myArray1 = [];
for(let i =1;i <= 5;i++){
  myArray1.push(i)
}

//11
const myArray2 = [];
for(let i =1;i <= 9;i +=2 ){
  myArray.push(i)
}

//12
const myArray3 = [];
for(let i = 9; 0 <= i; i -=2){
  myArray.push(i);
}

//13
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
  console.log(total)
}
console.log(total)