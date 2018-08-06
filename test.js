let dog = {
  number1: 0,
  number2: 0
};

let voting = false;
console.log(voting);
console.log("number1" in dog);
console.log(dog["number1"]);
dog["number1"] += 2;
console.log(dog["number1"]);

setInterval(() => {
  dog["number1"] += 4;
  dog["number2"] += 5;
  voting = true;
  console.log(voting);
}, 3000);

console.log(dog["number1"]);
console.log(dog["number2"]);
