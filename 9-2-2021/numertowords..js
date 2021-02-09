let ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","therteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
let tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninty"]
let num = parseInt(prompt("enter a 3 digit only number"));
if(num<20){
	alert(ones[num]);
}else if(num<100){ // only 2 digit
	// 23 = > 2x10 + 3
	let t = Math.floor(num/10);
	let o = num%10
	console.log('t = '+t)
	console.log('o = '+o)
	console.log(tens[t]+" "+ones[o])
	alert(tens[t]+" "+ones[o])
}else if(num<1000){ // only 3 digit
	// 236 = > 2x100 + 3x10 + 6

	let o = num%10
	let t = Math.floor(Math.floor(num/10)%10);
	let h = Math.floor(num/100)
	console.log('t = '+t)
	console.log('o = '+o)
	console.log('h = '+h)
	alert(ones[h]+" hundred "+tens[t]+" "+ones[o])
}else{
	alert("Hey bro, sorry but eeeiii naa chalbu....")
}
