var i = 1;
var txt = 'Tommy Rachman';
var speed = 200;

function typeWriter() {
	var textElement = document.getElementById("text");
	if (i <= txt.length) {
		textElement.innerHTML = txt.substring(0, i);
		i++;
		setTimeout(typeWriter, speed);
	} else {
		// End of text has been reached, reset i and start over
		i = 1;
		setTimeout(typeWriter, speed);
	}
}

window.onload = function() {
	typeWriter();
}