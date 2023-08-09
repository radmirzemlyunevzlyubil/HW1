//////////HomeWork1\\\\\\\\\\
function getFactorRecursive(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * getFactorRecursive(n - 1);
    }
  }
  
  const num = 5;
  const factorial = getFactorRecursive(num);
  console.log(factorial);

//////////HomeWork2\\\\\\\\\\

const alex = "My name457 is Alex"; // Я специально написал слитно "name457", ведь меня бесил пробел между "name" и "Alex" при их выводе на консоль.
const rex = alex.replace(/\d/g, '');
console.log(rex);

//////////HomeWork3\\\\\\\\\\

const helloWorld = "Hello\tWorld\nTest";
const test = helloWorld.match(/\s/g);
console.log(test);

///////////////Additional Task\\\\\\\\\\\\\\\

function countChar(str, char) {
  const charRegex = new RegExp(char, 'g');
  const matches = str.match(charRegex) || [];
  return matches.length;
}

const lorem = 'loremipsumdolor';
const theLetterO = 'o';
const count = countChar(lorem, theLetterO);
console.log(count);
