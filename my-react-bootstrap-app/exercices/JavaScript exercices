function reverse(ch1){
    let  ch2="";
    for  (let i =ch1.length-1; i>=0;i--) {
        ch2+=ch1[i];
    }
    return ch2;
}
function count(ch1){
    let nb=0;
    nb=(ch1.length);
    return nb;
}

function capWords(ch1) {
  let ch2 = "";        
  let cap = true;      

  for (let i = 0; i < ch1.length; i++) {
    let char = ch1[i];

    if (cap && char !== " ") {
      ch2 += char.toUpperCase();  
      cap = false;                
    } else {
      ch2 += char.toLowerCase();  
    }

    if (char === " ") {
      cap = true; 
    }
  }

  return ch2;
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


function fibonacciSequence(n) {
  if (n <= 0) return [];           
  if (n === 1) return [0];          
  
  const seq = [0, 1];               
  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq;
}
