var i = 0;
var term = 1;

/* match text to post for each */
if (term == 1) {
  	if (runthrough == 1) {
		var txt = 'Binary Size Showdown: C vs Rust';
	}
}

var speed = 50;

function typeWriter() {
  	if (i < txt.length) {
    	document.getElementById("demo").innerHTML += txt.charAt(i);
    	i++;
    	setTimeout(typeWriter, speed);
  	}
}
