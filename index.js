
var buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i<buttons; i++) {

	document.querySelectorAll('.drum')[i].addEventListener("click", clicked);

	function clicked() {
		var buttonName = this.innerHTML;
		sound(buttonName);
		animation(buttonName);

	}

}

document.addEventListener("keypress", pressed);
function pressed (key) {
	sound(key.key);
	animation(key.key);
}



function sound(keyName) {
	var buttonName = this.innerHTML;
	switch (keyName) {
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom1 = new Audio("sounds/tom-2.mp3");
			tom1.play();
			break;
		case "s":
			var tom1 = new Audio("sounds/tom-3.mp3");
			tom1.play();
			break;
		case "d":
			var tom1 = new Audio("sounds/tom-4.mp3");
			tom1.play();
			break;
		case "j":
			var tom1 = new Audio("sounds/snare.mp3");
			tom1.play();
			break;
		case "k":
			var tom1 = new Audio("sounds/kick-bass.mp3");
			tom1.play();
			break;
		case "l":
			var tom1 = new Audio("sounds/crash.mp3");
			tom1.play();
			break;

		default :
		     alert("wrong key !!");

		
	}
}

function animation(keyUsed) {
	var activeKey = document.querySelector('.' + keyUsed);
	activeKey.classList.add("pressed");

	setTimeout(function () {
		activeKey.classList.remove("pressed");
	} , 100)
}