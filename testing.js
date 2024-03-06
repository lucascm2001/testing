function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

module.exports = {
  sum, capitalize, reverseString, calculator,
};

const string = 'hey';
console.log(string.split('').reverse().join(''));
