let a = parseFloat(prompt("your first number for addition"));
let b = parseFloat(prompt("your second number for addition"));
let a1 = parseFloat(prompt("your first number for subtraction"));
let b1 = parseFloat(prompt("your second number for subtraction"));
let a2 = parseFloat(prompt("your first number  for multiplication"));
let b2 = parseFloat(prompt("your second number for multiplication"));
let a3 = parseFloat(prompt("your first number for division"));
let b3 = parseFloat(prompt("your second number  for division"));

let c = a + b;
let c1 = a1 - b1;
let d = a2 * b2;
let d2 = a3 / b2;
document.write(a+"+"+b+"="+c);
document.write("<br>");
document.write(a1+"-"+b1+"="+c1); 
document.write("<br>");
document.write(a2+"x"+b2+"="+d); 
document.write("<br>")
document.write(a3+"/"+b3+"="+d2);
