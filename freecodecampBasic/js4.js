//1
function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }else {
      result = "5 or Smaller";
    }
  }
  
  testElse(4);

  //2
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }else{
      return "Between 5 and 10";
    }   
  }
  
  testElseIf(7);

  //3
  function orderMyLogic(val) {
    if (val < 10 && val > 5  ) {
      console.log("Less than 10");
    } else if (val < 5) {
      console.log("Less than 5");
    } else {
      console.log("Greater than or equal to 10");
    }
  }
  orderMyLogic(4);

  //4
  function testSize(num) {
  if(num < 5){
    return 'Tiny';
  }else if(num < 10){
    return 'Small';
  }else if(num < 15){
    return 'Medium';
  }else if(num < 20){
    return 'Large';
  }else if(num >= 20){
    return 'Huge';
  }else{
    return "Change Me";
  }  
  }
  testSize(7);

  //5
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

  function golfScore(par, strokes) {
    if (strokes == 1) {
      return names[0];
    } else if (strokes <= par - 2) {
      return names[1];
    } else if (strokes == par - 1) {
      return names[2];
    } else if (strokes == par) {
      return names[3];
    } else if (strokes == par + 1) {
      return names[4];
    } else if (strokes == par + 2) {
      return names[5];
    }
    if (strokes >= par + 3) {
      return names[6];
    }
    return "Change Me";
  }

  golfScore(5, 4);

  //6
  function caseInSwitch(val) {
    let answer = "nothing";

    switch (val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }
    return answer;
  }
  console.log(caseInSwitch(1));
  console.log(caseInSwitch(3));
  console.log(caseInSwitch(5));