var el = document.getElementById("circle");
var text = document.getElementById("text");
var output = '329';
var duration = 10;
var time = duration - 1;

for(var i = 326; i > 1; i--){
	output +=  ";" + i;
}

el.innerHTML = "<animate attributeName='stroke-dashoffset' values='" + output + "' dur='" + ((duration + Math.ceil(duration / 2)) + 2) + "' repeatCount='1' fill='freeze'>";

var interval = setInterval(function(){
	if(text.innerHTML != 0){
		text.innerHTML = time--;
		text.style.color = (text.innerHTML == 0)? "#f14a60" : "#fff";
	}
	else {
		clearInterval(interval);
	}
}, 1000);
