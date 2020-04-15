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

function stringSplitter(str, separator) {
 if(!str.includes(separator)) {return [str]}

 else {
  const sepIdx = str.indexOf(separator) 
  const sliced = str.slice(0,sepIdx)
  }
}
console.log(stringSplitter('02/20/2020'))

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

