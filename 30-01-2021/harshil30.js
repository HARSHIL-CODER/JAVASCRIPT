console.log("js linked")
function doSomething() {
	const name = prompt("naam likh")
	alert ("hame ye naam pasand nhi aaya")
	const TASK = prompt("kya karna hai ..bol? \n kya kar na hai\n 1- addition\n 2- subtraction\n 3- multiplication \n 4- division")
	if (TASK === '1'){
		let num1 = prompt("first number likho")
		let num2 = prompt("second number likho")
		console.log ("num1: "+num1)
		console.log ("num2: "+num2)
		let a = parseInt(num1)
		let b = parseInt(num2)
		let c = a + b
		console.log("sum is " + c)
		alert(a + "+" + b + "=" + c)
	}

	if (TASK === '2'){
		let num1 = prompt("first number likho")
		let num2 = prompt("second number likho")
		console.log ("num1: "+num1)
		console.log ("num2: "+num2)
		let a = parseInt(num1)
		let b = parseInt(num2)
		let c = a - b
		console.log("sum is " + c)
		alert(a + "-" + b + "=" + c)
	}
		if (TASK === '3'){
		let num1 = prompt("first number likho")
		let num2 = prompt("second number likho")
		console.log ("num1: "+num1)
		console.log ("num2: "+num2)
		let a = parseInt(num1)
		let b = parseInt(num2)
		let c = a * b
		console.log("sum is " + c)
		alert(a + "x" + b + "=" + c)
	}
		if (TASK === '4'){
		let num1 = prompt("first number likho")
		let num2 = prompt("second number likho")
		console.log ("num1: "+num1)
		console.log ("num2: "+num2)
		let a = parseInt(num1)
		let b = parseInt(num2)
		let c = a / b
		console.log("sum is " + c)
		alert(a + "/" + b + "=" + c)
	}

}

doSomething()