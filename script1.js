console.log("Завдання 1");

function test(inputArray) {
  if (inputArray.length >= 2) {
    let result = 0;
    for (let i = 0; i < inputArray.length - 1; i += 1) {
      const x = inputArray[i] * inputArray[i + 1];
      if (result < x) {
        result = x;
      }
    }

    return result;
  }
}

console.log(test([3, 6, -2, -5, 7, 3]));
console.log(test([-1, -2]));
console.log(test([5, 1, 2, 3, 1, 4]));
console.log(test([1, 2, 3, 0]));
console.log(test([9, 5, 10, 2, 24, -1, -48]));
