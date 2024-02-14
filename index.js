// const rightIncreasingTriangle = (number) => {
//   for (let i = 1; i <= number; i++) {
//   for (let j = 1; j <= i; j++) {
//   // eslint-disable-next-line no-undef
//   process.stdout.write("*");
//   }
//   console.log();
//   }
//  };
//  const leftIncreasingTriangle = (number) => {
//   for (let i = number; i >= 1; i--) {
//   for (let j = 1; j <= number; j++) {
//   if (j < i) {
//   // eslint-disable-next-line no-undef
//   process.stdout.write(" ");
//   } else {
//   // eslint-disable-next-line no-undef
//   process.stdout.write("*");
//   }
//   }
//   console.log();
//   }
//  };
//  const rightDecreasingTriangle = (number) => {
//   for (let i = number; i >= 1; i--) {
//   for (let j = 1; j < i; j++) {
//   // eslint-disable-next-line no-undef
//   process.stdout.write("*");
//   }
//   console.log("");
//   }
//  };
//  const leftDecresingTriangle = (number) => {
//   for (let i = 1; i <= number; i++) {
//   for (let j = 1; j <= number; j++) {
//   if (i <= j) {
//   // eslint-disable-next-line no-undef
//   process.stdout.write("*");
//   } else {
//   // eslint-disable-next-line no-undef
//   process.stdout.write(" ");
//   }
//   }
//   console.log("");
//   }
//  };
//  // rightIncreasingTriangle(10);
//  // leftIncreasingTriangle(10);
//  // rightDecreasingTriangle(10);
//  // leftDecresingTriangle(10);

//  //1) write a funtion to return the sum of cubes of the elements in a given array(without using loops)
//  // input:[1,2,3,4]
//  //output:100

//  const answer1 = (arr) =>
//   arr.map((each) => each * each * each).reduce((total, ele) => total + ele);
//  // console.log(answer1([1, 2, 3, 4]));

//  //2) find the second largest number in the given array
//  //input:[-2,-3,3,5,-3,10]
//  //output:5
//  const answer2 = (arr) => arr.sort((a, b) => a - b)[arr.length - 2];
//  // console.log(answer2([1, 2, 3, -425, 5, 6, 7, -81, 9]));

//  //3) find the word which has most occurances of a character(which can be any character) in the given array of words
//  //input:['krishnakeerthi','harshavardhan','aditya','bharath'] (counted in both Uppercase and lowercase)
//  //output:harshavardhan (a-->4 times )

//  const answer3 = (arr) => {
//   const objArray = arr.map((each) => {
//   let newObj = {};
//   const charArray = each.split("");
//   charArray.forEach((char) => {
//   if (newObj[char]) {
//   newObj[char] += 1;
//   } else {
//   newObj[char] = 1;
//   }
//   });
//   return newObj;
//   });
//   const CharCountArray = objArray.map((each) => Object.entries(each));
//   const maxCharArray = CharCountArray.map((eachWordArray) => {
//   const sorted = eachWordArray.sort((a, b) => b[1] - a[1]);
//   return sorted;
//   });
//   let resultIndex = -1;
//   let maxValue = -1;
//   maxCharArray.forEach((each, index) => {
//   if (each[0][1] > maxValue) {
//   resultIndex = index;
//   }
//   });

//   return [maxCharArray[resultIndex][0], arr[resultIndex]];
//  };
//  // console.log(answer3(["krishna", "keerthi", "harshavardhan"]));
//  const answer4 = (arr) => {
//   let wieghtedArray = arr.map((each) =>
//   each
//   .split("")
//   .map((char) => char.charCodeAt())
//   .reduce((total, ele) => total + ele)
//   );
//   let answerWeight = -1;
//   let answerName = "";
//   wieghtedArray.forEach((each, index) => {
//   if (each > answerWeight) {
//   answerWeight = each;
//   answerName = arr[index];
//   }
//   });
//   console.log(answerName, answerWeight);
//  };
//  //

//  // 5) find the array of numbers which are more than its average
//  //input:[1,5,3,4,2,6] (array need not be in sorted order)
//  // output: [4,5,6] (average is 3.5 so [4,5,6] are number which are more than 3.5)

//  const answer5 = (arr) => {
//   const sum = arr.reduce((total, ele) => total + ele);
//   const avg = sum / arr.length;
//   return arr.filter((each) => each > avg);
//  };

//  // aditya

//  // 1) sort an arry without using sort method

//  const aditya1 = (arr) => {
//   const size = arr.length;
//   for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//   if (arr[i] < arr[j]) {
//   let temp = arr[j];
//   arr[j] = arr[i];
//   arr[i] = temp;
//   }
//   }
//   }
//   return arr;
//  };
//  // console.log(aditya1([1, 2, 23, 56, 25, 12, 4, 8, 9, 8, 98, 65, 66]));
//  // array of arrays containing following the pattern of pascals triangle for a given num of rows
//  // Input: 5
//  // Output:[ [1],[1,1], [1,2,1],[1,3,3,1],[1,4,6,4,1]]

//  const aditya2 = (number) => {
//   const finalArray = [[0, 1, 0]];
//   if (number === 1) {
//   return [[1]];
//   } else {
//   number--;
//   while (number--) {
//   const tail = finalArray[finalArray.length - 1];
//   const pushableElement = [0];
//   for (let i = 0; i < tail.length - 1; i++) {
//   let tempSum = tail[i] + tail[i + 1];
//   pushableElement.push(tempSum);
//   }
//   pushableElement.push(0);
//   finalArray.push(pushableElement);
//   }
//   }
//   return finalArray.map((each) => each.slice(1, each.length - 1));
//  };

//  const aditya3 = (arr) => {
//   arr.sort((a, b) => b - a);
//   console.log(arr);
//   let maxDifference = -1;
//   for (let i = 0; i < arr.length - 1; i++) {
//   let presentDiff = arr[i] - arr[i + 1];
//   if (maxDifference < presentDiff) {
//   maxDifference = presentDiff;
//   }
//   }
//   return maxDifference;
//  };
//  // console.log(aditya3([1, 2, 3, 4, 5, 8, 89, 56, 1, 78, 45, 56]));

//  // Gopi Krishna
//  //) Find the maximum number in an array of numbers
//  // ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//  // Ans:Max: 90

//  const gopi1 = (arr) => arr.sort((a, b) => b - a)[0];
//  // console.log(gopi1([23, 56, 89, 15, 24, 16, 45, 76, 78]));
//  // 2)Create a function that will find the nth Fibonacci number using recursion
//  // let n = findFibonacci(10);
//  // Ans:55
//  const gopi2 = (number) => {
//   if (number === 0 || number === 1) return 1;
//   return gopi2(number - 1) + gopi2(number - 2);
//  };

//  // console.log(gopi2(9));
//  // //3)Create a function that will return a Boolean specifying if a number is prime
//  // console.log(2, " is prime? ", isPrime(2));
//  // Ans:2 is prime? true

//  const gopi3 = (number) => {
//   if (number == 1) return false;
//   if (number === 2) return true;
//   for (let i = 2; i < number; i++) {
//   if (number % i === 0) {
//   return false;
//   }
//   }
//   return true;
//  };

//  //
//  //
//  // 4)Rotate an array to the left 1 position
//  // ar = [1, 2, 3];
//  // Ans:[ 2, 3, 1 ]
//  const gopi4 = (arr) => {
//   const dummy = [...arr, ...arr];
//   return dummy.slice(1, arr.length + 1);
//  };

//  // 5)Calculate the sum of first 10 prime numbers
//  // if n = 10;
//  // Ans:Sum of first 10 primes is 129
//  const listPrimeGenerator = (number) => {
//   let arr = [];
//   for (let i = 1; i < 10000; i++) {
//   let factCount = 0;
//   for (let j = 1; j <= i; j++) {
//   if (i % j === 0) {
//   factCount++;
//   }
//   }
//   if (factCount === 2) {
//   arr.push(i);
//   }
//   if (arr.length === number) return arr;
//   }
//  };

//  const gopi5 = (number) =>
//   listPrimeGenerator(number).reduce((total, ele) => total + ele);

//  //Harsha

//  //QUESTION 1
//  // flatten this nested array don't use inbuilt methods.
//  // let nestedArray = [1,2,3,[456,[4,8,7,9],6],[46,[5,5],88],[4,5,9,[0,1,2,[7,8,9,6]]]]
//  // result---> [1,2,3,456,4,8,7,9,6,46,5,5,88,4,5,9,0,1,2,7,8,9,6]

//  const checking = (arr) => arr.some((each) => typeof each !== typeof 2);

//  const harsha1 = (arr) => {
//   let newArray = arr;
//   while (checking(newArray)) {
//   let tempArray = [];
//   newArray.forEach((each) => {
//   if (typeof each === typeof 2) {
//   tempArray.push(each);
//   } else {
//   each.forEach((single) => tempArray.push(single));
//   }
//   });
//   newArray = tempArray;
//   }
//   console.log(newArray);
//  };

//  // harsha1([
//  // 1,
//  // 2,
//  // 3,
//  // [456, [4, 8, 7, 9], 6],
//  // [46, [5, 5], 88],
//  // [4, 5, 9, [0, 1, 2, [7, 8, 9, 6]]],
//  // ]);

//  // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//  // An input string is valid if:
//  // Open brackets must be closed by the same type of brackets.
//  // Open brackets must be closed in the correct order.
//  // Every close bracket has a corresponding open bracket of the same type.
//  const harsha2 = (myString) => {
//   const open = "([{";
//   const close = ")]}";
//   const stack = [myString[0]];
//   if (close.includes(myString[0])) return false;
//   for (let i = 1; i < myString.length; i++) {
//   stack.push(myString[i]);
//   if (close.includes(myString[i])) {
//   if (open.indexOf(myString[i - 1]) === close.indexOf(myString[i])) {
//   stack.pop();
//   stack.pop();
//   }
//   }
//   }
//   return stack.length === 0;
//  };
//  // console.log(harsha2("(]"));

//  const harsha3 = (arr1, arr2, arr3) => {
//   const result = [];
//   arr1.forEach((each, index) => {
//   if (arr2.includes(each) && arr3.includes(each)) {
//   result.push(each);
//   arr1[index] = Math.random() * 100000;
//   const index2 = arr2.indexOf(each);
//   arr2[index2] = Math.random() * 100000;
//   const index3 = arr3.indexOf(each);
//   arr3[index3] = Math.random() * 100000;
//   }
//   });
//   console.log(result);
//  };
//  // harsha3([1, 5, 5], [3, 4, 5, 5, 10], [5, 5, 10, 20]);

//  // QUESTION 4
//  //find majority value which is appears common is every array in 2D array
//  //Example 1
//  // let array1 = [
//  // [1, 3, 0, 6],
//  // [8, 3, 9, 0],
//  // [10, 79, 0, 6],
//  // [6, 0, 10, 7],
//  // [0, 66, 99, 100],
//  // ];
//  //result --> 0 is appear at least once in every array it's common value

//  const harsha4 = (arr) => {
//   const firstArray = arr[0];
//   let result = null;
//   firstArray.forEach((searchable) => {
//   if (arr.slice(1).every((each) => each.includes(searchable))) {
//   result = searchable;
//   }
//   });
//   return result;
//  };

//  // console.log(
//  // harsha4([
//  // [1, 3, 60, 6],
//  // [8, 3, 9, 80],
//  // [10, 79, 30, 62],
//  // [6, 0, 10, 7],
//  // [20, 66, 99, 100],
//  // ])
//  // );

//  //QUESTION 5
//  // Find the missing and repeating number
//  // Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.
//  // Input: arr[] = {3, 1, 3}
//  // Output: Missing = 2, Repeating = 3
//  // Explanation: In the array, 2 is missing and 3 occurs twice
//  const harsha5 = (arr) => {
//   const size = arr.length;
//   let repeated = null;
//   let missing = null;
//   const unique = [];
//   for (let i = 1; i <= size; i++) {
//   if (unique.includes(arr[i - 1])) {
//   repeated = arr[i - 1];
//   } else {
//   unique.push(arr[i - 1]);
//   }
//   if (!arr.includes(i)) {
//   missing = i;
//   }
//   }
//   console.log(repeated, missing);
//  };

//  // harsha5([4, 3, 6, 2, 1, 1]);

//  const family = {
//   mother: {
//   name: "Nagasuri",
//   age: 56,
//   },
//   father: {
//   name: "Babji",
//   age: 65,
//   },
//   brother: {
//   name: "Ganesh",
//   age: 28,
//   },
//   sister: {
//   name: "Devi",
//   age: 22,
//   },
//   mySelf: {
//   name: "Krishna",
//   age: 25,
//   },
//  };
//  family.friend = { name: "friendName", age: 8 };
//  // delete family.mySelf;
//  // family["friend"] = { name: "friendName", age: 28 };
//  // Object.assign(family, { friend: { name: "friendName", age: 25 } })
//  for (const [relation, details] of Object.entries(family)) {
//   console.log(
//   `relation is ${relation} and name is ${details.name} and age is${details.age}`
//   );
//  }
//  const mySelf = Object.create(family.mySelf);
//  console.log(Object.is(family.mySelf, mySelf));

//question 1

// const noOfPoles = 9;
// const arrayOfPoleHeights = [3, 7, 4, 1, 5, 3, 7, 3, 6];

// const arrayOfNumOfPoles = Array.from(
//   { length: noOfPoles },
//   (_, index) => index + 1
// );

// let maxBalls = 0;

// arrayOfNumOfPoles.forEach((_, i) => {
//   for (let j = i + 1; j < arrayOfNumOfPoles.length; j++) {
//     const poleOne = arrayOfNumOfPoles[i];
//     const poleTwo = arrayOfNumOfPoles[j];
//     const poleOneHeight = arrayOfPoleHeights[i];
//     const poleTwoHeight = arrayOfPoleHeights[j];
//     const minimumPoleHeight = Math.min(poleOneHeight, poleTwoHeight);
//     const distanceBetweenTwoPoles = poleTwo - poleOne;
//     const numOfBallsBetweenTwoPoles =
//       minimumPoleHeight * distanceBetweenTwoPoles;
//     if (numOfBallsBetweenTwoPoles > maxBalls)
//       maxBalls = numOfBallsBetweenTwoPoles;
//   }
// });

// console.log(maxBalls);

// question 2

// const numOfSpareParts = 4;
// const sparePartsCodesList = [
//   "qwe2rty",
//   "qty5ewr",
//   "ytre2wq",
//   "ytq5rew",
// ];

// function customSort(arr) {
//   return arr.sort((a, b) => {
//     if (a < b) {
//       return -1; // a comes before b
//     } else if (a > b) {
//       return 1; // a comes after b
//     } else {
//       return 0; // a and b are equal
//     }
//   });
// }

// const getNumInCode = (sparePartCode) => {
//   let number = null;
//   const arrayOfCharsCode = sparePartCode.split("");
//   for (let arrIndex in arrayOfCharsCode) {
//     if (!isNaN(arrayOfCharsCode[arrIndex]))
//       number += arrayOfCharsCode[arrIndex];
//   }
//   return number;
// };

// const getPartsList = (sparePartsCodesList, num) => {
//   const result = [];
//   for (let code of sparePartsCodesList) {
//     if (getNumInCode(code) === num) result.push(code);
//   }
//   return result;
// };

// const numsArray = [];

// for (let sparePartCode of sparePartsCodesList) {
//   numsArray.push(getNumInCode(sparePartCode));
// }

// const uniqueNumbersSet = new Set(numsArray);
// const uniqueNumbersSortedArrayInAsc = Array.from(uniqueNumbersSet).sort((a, b) => a - b);

// const groupedArrayOfCodes = [];

// for (let number of uniqueNumbersSortedArrayInAsc) {
//   const sortedList = customSort(getPartsList(sparePartsCodesList, number));
//   groupedArrayOfCodes.push(sortedList);
// }

// console.log(groupedArrayOfCodes);

// function createLetterNPattern(N) {
//   for (let i = 0; i < N; i++) {
//     let pattern = "";
//     for (let j = 0; j < N; j++) {
//       if (j === 0 || j === N - 1 || i === j) {
//         pattern += "*";
//       } else {
//         pattern += " ";
//       }
//     }
//     console.log(pattern);
//   }
// }

// createLetterNPattern(14);

// function createLetterNPattern(N) {
//     const patternArray = Array.from({ length: N }, (_, i) => {
//       const leftSpaces = ' '.repeat(i);
//       const spacesAfter = ' '.repeat(Math.max(N - 2 - i, 0));

//         if (i === 0 || i === N - 1) return "*".concat((" ".repeat(N - 1)), "*");
//       return "*".concat(leftSpaces, '*' , spacesAfter , '*');
//     });

//     patternArray.forEach(row => console.log(row));

//   }

//   // Example usage with N = 5
//   createLetterNPattern(5);

// function exitPointsList(m, n, matrix) {
//   const result = new Array(n).fill(0);

//   for (let column = 0; column < n; column++) {
//       let currentColumn = column;

//       for (let row = 0; row < m; row++) {
//           const nextColumn = currentColumn + matrix[row][currentColumn];

//           if (nextColumn < 0 || nextColumn > n - 1 || matrix[row][currentColumn] !== matrix[row][nextColumn]) {
//               result[column] = -1;
//               break;
//           }

//           result[column] = nextColumn;
//           currentColumn = nextColumn;
//       }
//   }

//   return result;
// }

// function main() {
//   const readline = require('readline');
//   const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//   });

//   rl.question('', (firstLine) => {
//       const [m, n] = firstLine.split(' ').map(Number);
//       const matrix = [];

//       rl.on('line', (line) => {
//           const row = line.split(' ').map(Number);
//           matrix.push(row);

//           if (matrix.length === m) {
//               rl.close();
//               const result = exitPointsList(m, n, matrix);
//               console.log(result);
//           }
//       });
//   });
// }

// main();

// function exitPointsList(m, n, matrix) {
//   const result = new Array(n).fill(0);

//   let column = 0;
//   while (column < n) {
//       let currentColumn = column;
//       let row = 0;

//       while (row < m) {
//           const nextColumn = currentColumn + matrix[row][currentColumn];

//           if (nextColumn < 0 || nextColumn > n - 1 || matrix[row][currentColumn] !== matrix[row][nextColumn]) {
//               result[column] = -1;
//               break;
//           }

//           result[column] = nextColumn;
//           currentColumn = nextColumn;
//           row++;
//       }

//       column++;
//   }

//   return result;
// }

// function main() {
//   const readline = require('readline');
//   const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//   });

//   let m, n;
//   let matrix = [];
//   let currentRow = 0;

//   rl.on('line', (line) => {
//       if (!m) {
//           [m, n] = line.split(' ').map(Number);
//       } else {
//           const row = line.split(' ').map(Number);
//           matrix.push(row);

//           if (currentRow === m - 1) {
//               rl.close();
//               const result = exitPointsList(m, n, matrix);
//               console.log(result);
//           }

//           currentRow++;
//       }
//   });
// }

// main();

function getElement(matrix, c, d) {
  if (c < 0 || d < 0) {
    return "nuk";
  }
  try {
    return matrix[c][d];
  } catch (error) {
    return 0;
  }
}

function checkElementGreaterThan0(matrix, x, y) {
  if (x < 0 || y < 0) {
    return true;
  } else {
    try {
      return matrix[x][y] > 0;
    } catch (error) {
      return false;
    }
  }
}

function is4SidesElementsAreNotZeroes(matrix, a, b, side) {
  if (side === "top") {
    const isTopElementGreaterThan0 = checkElementGreaterThan0(matrix, a - 1, b);
  }
  
  const isBottomElementGreaterThan0 = checkElementGreaterThan0(
    matrix,
    a + 1,
    b
  );
  const isLeftElementGreaterThan0 = checkElementGreaterThan0(matrix, a, b - 1);
  const isRightElementGreaterThan0 = checkElementGreaterThan0(matrix, a, b + 1);

  return (
    isTopElementGreaterThan0 &&
    isBottomElementGreaterThan0 &&
    isLeftElementGreaterThan0 &&
    isRightElementGreaterThan0
  );
}

function getDiagonalElement(matrix, i, j) {
  const diagonalEnemies = [];

  const topLeftDiagonalElement = getElement(matrix, i - 1, j - 1);
  if (
    topLeftDiagonalElement &&
    is4SidesElementsAreNotZeroes(matrix, i - 1, j - 1, "top")
  ) {
    diagonalEnemies.push(topLeftDiagonalElement);
  }

  const topRightDiagonalElement = getElement(matrix, i - 1, j + 1);
  if (
    topRightDiagonalElement &&
    is4SidesElementsAreNotZeroes(matrix, i - 1, j + 1)
  ) {
    diagonalEnemies.push(topRightDiagonalElement);
  }

  const bottomLeftDiagonalElement = getElement(matrix, i + 1, j - 1);
  if (
    bottomLeftDiagonalElement &&
    is4SidesElementsAreNotZeroes(matrix, i + 1, j - 1)
  ) {
    diagonalEnemies.push(bottomLeftDiagonalElement);
  }

  const bottomRightDiagonalElement = getElement(matrix, i + 1, j + 1);
  if (
    bottomRightDiagonalElement &&
    is4SidesElementsAreNotZeroes(matrix, i + 1, j + 1)
  ) {
    diagonalEnemies.push(bottomRightDiagonalElement);
  }
  console.log(diagonalEnemies);
  return diagonalEnemies;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m, n;
let matrix = [];

rl.question("", (firstLine) => {
  [m, n] = firstLine.split(" ").map(Number);

  rl.on("line", (line) => {
    const row = line.split(" ").map(Number);
    matrix.push(row);

    if (matrix.length === m) {
      rl.close();
      let enemiesDiagonalLi = [];
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
            enemiesDiagonalLi = enemiesDiagonalLi.concat(
              getDiagonalElement(matrix, i, j)
            );
          }
        }
      }
      // console.log(enemiesDiagonalLi);
      console.log(enemiesDiagonalLi.reduce((acc, curr) => acc + curr));
    }
  });
});
