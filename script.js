let counter = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

function changeNumber(){
	let num = parseInt(counter.textContent);
	num += 1;
	counter.textContent = num;
	alert(num)
}

incrementBtn.addEventListener("click", changeNumber);