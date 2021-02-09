let i = parseInt(prompt("enter a number"))
 function oddeven(n) {
	// body...
	if  (i%2===0){
		return "even";
	}else {
		return "odd";
	}
}

let res = oddeven (i)
document.getElementById('p1').innerHTML = res
