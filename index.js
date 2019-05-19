var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(array) {
  array.push("Alex");
  return kittens;
}

console.log(destructivelyAppendKitten(kittens));
console.log(kittens);