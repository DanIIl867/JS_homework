let a;
let b;
let result;
let operator;
let pi = 3.14159;


a = prompt('R', '');
b = prompt('h', '');
operator = prompt('operator', '');

switch (operator) {
   case '*':
      result = (Number(pi) * (Number(a) * Number(a))) * Number(b);
      break;
}



alert(result);