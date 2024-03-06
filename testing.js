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

function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('')
    .map((letter) => {
      if (alphabet.includes(letter)) {
        const index = alphabet.indexOf(letter);
        return alphabet[(index + shift) % 26];
      }
      return letter;
    })
    .join('');
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((acc, curr) => acc + curr) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = {
  sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray,
};

// const string = 'hey';
