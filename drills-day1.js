//counting sheep

function countSheep(n) {
  if (n === 0) { return console.log("all sheeps jumped over the fence") }
  console.log(n + " :another sheep jumped over the fence")
  return countSheep(n - 1)
}
console.log(countSheep(4))

//power calculator

function powerCalculator(base, exp) {
  if (exp <= 0) { return base }
  return base * powerCalculator(base, (exp - 1))
}
console.log(powerCalculator(10, 1))

//reverse string

function reverseString(str) {
  if (str === "") { return "" }
  else
    return reverseString(str.substr(1)) + str.charAt(0)
}
console.log(reverseString('redrum'));

//nth triangle number

const triangle = (n) => {
  if( n <= 1 ) {
      return 1
  } else {
      return n + triangle(n-1)
  }
}
console.log(triangle(5))

//string splitter

function strSplitter(str, sep, cur = "") {
  console.log(str);
  if (str.length === 0) {
    return [cur];
  }
  if (str[0] == "/") {
    return [cur, ...strSplitter(str.substr(1), sep, "")]
  }
  return strSplitter(str.substr(1), sep, cur + str[0])
}
result = strSplitter("20/20/2020", "/")
console.log(result);

//fibonacci

function fibonacci(n) {
  if (n === 1) return [0, 1];
  let x = fibonacci(n - 1);
  x.push(x[x.length - 1] + x[x.length - 2]);
  return x;
}
console.log(fibonacci(7))

//factorial

function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(5))

//maze

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
function solveMave(myMaze, row, column) {
  if (myMaze.length < row || myMaze.length < column || row < 0 || column < 0) {
    return;
  }
  const value = myMaze[row][column]
  if (value == "e") {
    console.log("exit found");
    return;
  }
  if (value == "*") {
    return;
  }
  myMaze[row][column] = "*"
  solveMave(myMaze, row + 1, column)
  solveMave(myMaze, row, column + 1)
  solveMave(myMaze, row - 1, column)
  solveMave(myMaze, row, column - 1)
  myMaze[row][column] = " "
}
solveMave(myMaze, 0, 0)