let t = parseInt(prompt("enter a number"))
function celciousToFaranite(fahrenheit) {
  

  return (5/9) * (fahrenheit-32);
} 
document.getElementById('p1').innerHTML = celciousToFaranite(t)
