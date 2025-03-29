let incrementBtn = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");

function changeNumber(){
	let num = parseInt(counter.textContent);
	alert(num)
	num+=1;
	counter.textContent = num;
}

incrementBtn.addEventListener("click", changeNumber);