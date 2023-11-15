// /////////////Verify a prime number?//////////////
const primeNumber = (number) => {
  var divisor = 2;
  while (number > divisor) {
    if (number % divisor == 0) {
      return false;
    } else divisor++;
  }
  return true;
};
// console.log(primeNumber(12));

// /////////////Find all prime factors of a number?//////

const findPrimeFactors = (number) => {
  var divisor = 2;
  var factors = [];
  while (number > 2) {
    if (number % divisor == 0) {
      factors.push(divisor);
      number /= divisor;
    } else divisor++;
  }
  return factors;
};
// console.log(findPrimeFactors(12));

// /////////////Get 100th Fibonacci number?//////////////

const fabnocciNumbers = (number) => {
  var fabnocciArray = [0, 1];
  while (fabnocciArray.length < number) {
    fabnocciArray.push(
      fabnocciArray[fabnocciArray.length - 1] +
        fabnocciArray[fabnocciArray.length - 2]
    );
  }
  return fabnocciArray;
};
// console.log(fabnocciNumbers(12));

// ///////////////////Find the greatest common divisor of two numbers/////////////

