var splitInteger = function(num, parts) {
  // Complete this function
  if (num < 0 || parts < 0) {
    return "Please enter non-negative integers!";
  }
  var partsArray = [];
  if (num >= parts) {
    var first = parseInt(num / parts); //The first part of the number
    var y = num % parts; //Number of occurrences of the latter part
    console.log("y is " + y);
    var x = parts - y; //Number of occurrences of the previous part

    for (var i = 0; i < x; i++) {
      partsArray.push(first);
    }

    for (var i = 0; i < y; i++) {
      partsArray.push(first + 1);
    }

    return partsArray;
  } else {
    return "parts should be smaller than num!";
  }
};

let answer = splitInteger(20, 6);
console.log(answer);
let another = [3, 1, 2];
console.log(...another);
console.log("another " + another.slice().sort((a, b) => b - a)); //sort array descending order

var i = 4;

while (--i) {
  console.log("i is " + i);
}

var getReversed = function(theString) {
  var r = "";

  for (var i = theString.length - 1; i >= 0; i--) {
    r += theString[i];
  }

  return r;
};

console.log(getReversed("Timothy"));
//or write it like this using prototypes

String.prototype.getReversed = function() {
  var r = "";
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

var s = "SimonTimothy";
console.log(s.getReversed());
