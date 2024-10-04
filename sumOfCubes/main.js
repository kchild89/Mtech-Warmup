function sumOfCubes(a, b) {
  const x = a * a * a;
  const y = b * b * b;
  const z = x + y;
  return z;
}

console.log(sumOfCubes(2, 2));
console.log(sumOfCubes(4, 9));

// shorter
function sumOfCube(a, b) {
  return a * a * a + b * b * b;
}

function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwo(5, 4));

function countE() {
    let phrase = prompt("Which phrase would you like to examine?")
    if (typeof(phrase) != "string") {
        alert('That is not a valid entry')
        return false;
    } else (typeof(phrase) == "string") {
        let eCount = 0;
        for (let index = 0, index < phrase.length, index++) {
            
        }
    }
}
