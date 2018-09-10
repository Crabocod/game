var r = document.getElementById('r');
var htmlScore = document.getElementById('score');
var left = 65;
var down = 57;
var mr;
var md;
var mu;
var ml;
var c = [];
var c2 = [];
var g = [];
var g2 = [];
var rCoor;
var e;
var gb;
var k;
var k1;
var score = 0;
var narr = [];
var barr = [];
var elem = [document.getElementById('e1'),document.getElementById("e2"),document.getElementById("e3"),
document.getElementById("e4"),document.getElementById("e5"),document.getElementById("e6")
,document.getElementById("e7"),document.getElementById("e8"),document.getElementById("e9")
,document.getElementById("e10"),document.getElementById("e11"),document.getElementById("e12")
,document.getElementById("e13"),document.getElementById("e14"),document.getElementById("e15")
,document.getElementById("e16"),document.getElementById("e17"),document.getElementById("e18")
,document.getElementById("e19"),document.getElementById("e20"),document.getElementById("e21")
,document.getElementById("e22"),document.getElementById("e23"),document.getElementById("e24")
,document.getElementById("e25"),document.getElementById("e26"),document.getElementById("e27")
,document.getElementById("e28"),document.getElementById("e29"),document.getElementById("e30")
,document.getElementById("e31"),document.getElementById("e32"),document.getElementById("e33")
,document.getElementById("e34"),document.getElementById("e35"),document.getElementById("e36")
,document.getElementById("e37"),document.getElementById("e38"),document.getElementById("e39")
,document.getElementById("e40"),document.getElementById("e41"),document.getElementById("e42")];

document.onkeypress = function(event){

	if (event.key == "d") {
		clearInterval(md);
		clearInterval(mu);
		clearInterval(ml);
		mr = setInterval(moveRight, 600);
	}
	
	if (event.key == "s") {
		clearInterval(mr);
		clearInterval(mu);
		clearInterval(ml);
		md = setInterval(moveDown, 600);
	}
	if (event.key == "w") {
		clearInterval(mr);
		clearInterval(md);
		clearInterval(ml);
		mu = setInterval(moveUp, 600);

		
	}
	if (event.key == "a") {
		clearInterval(mr);
		clearInterval(md);
		clearInterval(mu);
		ml = setInterval(moveLeft, 600);
	}
}
var block = [badBlock,niceBlock];

setInterval(RB,1500)

function RB(){
	var r = randomBlock();
setTimeout(block[r],1500);
}

function badBlock(){
	e = elem[randomElem()];
	k = e.getBoundingClientRect();
	c.push(k.left);
	c2.push(k.top);
	barr.push(e);
	e.style.background = "red";
	
	
}

function niceBlock(){
	var r = randomElem();
	gb = elem[r];
	k1 = gb.getBoundingClientRect();
	g.push(k1.left);
	g2.push(k1.top);
	narr.push(gb);
	gb.style.background = "green";

	
}

function moveRight() {
	rCoor = r.getBoundingClientRect();
	if (left >= 565) {
		left = 65;
	    }
	    else{
		left += 100;
		}
		r.style.left = left + 'px';
		checkBad();
		checkNice();	
}
function moveDown(){
	rCoor = r.getBoundingClientRect();
	if (down >= 657) {
			down = 57;
		}
		else{
		down += 100;
		}
		r.style.top = down + 'px';

	checkBad();
	checkNice();		
}
function moveUp(){
	rCoor = r.getBoundingClientRect();
	if (down <= 57) {
			down = 657;
		}
		else{
		down -= 100;
		}
		r.style.top = down + 'px';

		checkBad();	
		checkNice();
}
function moveLeft(){
	rCoor = r.getBoundingClientRect();
	if (left <= 65) {
			left = 565;
		}

		else{
		left -= 100;
		}
		r.style.left = left + 'px';

		checkBad();	
		checkNice();
}
function checkBad(){
	for (var i = 0; i < c.length; i++) {
	
		if (rCoor.left-7 == c[i] && rCoor.top-7 == c2[i]) {
			alert('You lose');
			location.reload();
		}
		}
}
function checkNice() {
	
	for (var i = 0; i < g.length; i++) {
		
		if (rCoor.left-7 == g[i] && rCoor.top-7 == g2[i]) {
			
			if (c.length > 0) {
			score++
			barr[barr.length-1].style.background = "orange";
			narr[i].style.background = "orange";
			narr.splice(i,1);
			barr.pop();
			g.splice(i,1);
			g2.splice(i,1);
			c.pop();
			c2.pop();
			htmlScore.innerHTML = score;
		}
		}
		}
}





function randomElem(){
	return Math.floor(Math.random() * 42)
}
function randomRedBlock(){
	return Math.floor(Math.random() * c.length)
}
function randomBlock(){
	return Math.floor(Math.random() * 2)
}



