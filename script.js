var r = document.getElementById('r');
var left = 65;
var down = 57;

document.onkeypress = function(event){
	
	if (event.key == "d") {
		if (left >= 465) {
		left = -35;
	    }

		left += 100;
		r.style.left = left + 'px';	
	}
	
	if (event.key == "s") {
		if (down >= 455) {
			down = -43;
		}

		down += 100;
		r.style.top = down + 'px';
		
	}
	if (event.key == "w") {
		if (down <= 57) {
			down = 556;
		}

		down -= 100;
		r.style.top = down + 'px';
		
	}
	if (event.key == "a") {
		if (left <= 65) {
			left = 567;
		}

		left -= 100;
		r.style.left = left + 'px';
	}
}
