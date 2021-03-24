// helloWorld function 
function helloWorld() {
    return "Hello, World!";
};

// addOne
function addOne(input) {
  if (typeof input !== "number") {
      return NaN;
  } else {
      return input + 1;
  }
};

// isFive
function isFive(input) {
    if (typeof input !== "number") {
        return false;
    } else {
        return input % 5 === 0;
    }
};

//isEven
function isEven(input) {
    return input % 2 === 0;
};

// isVowel

function isVowel(x) {
    return x == 'a' || x == 'A' || x == 'e' || x == 'E' || x == 'i' || x == 'I' || x == 'o' || x == 'O' || x == 'u' || x == 'U'
};

// add

function add(x,y) {
    return parseFloat(x) + parseFloat(y);
};