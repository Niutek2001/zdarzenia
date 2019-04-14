var s;
var ms;
var Status = false;
var interval;
function odliczanieStart() {
	if (Status == false) {
	Status = true;
	ms = 1000;
	s = 59;
	document.getElementById("czasA").innerHTML = "";
	document.getElementById("czas").innerHTML = "60.000";
	interval = setInterval(msMinus, 20);
}}
function msMinus(){
	ms = ms - 20;
	odliczanie();
}
function odliczanie() {
	if ((s != -1)) {
		if (ms < 10){
			document.getElementById("czas").innerHTML = s + ".00" + ms;
		}
		else if (ms < 100){
			document.getElementById("czas").innerHTML = s + ".0" + ms;
		}
		else if (ms >= 100){
			document.getElementById("czas").innerHTML = s + "." + ms;
		}
	}
	else if (s == -1){
	document.getElementById("czas").innerHTML = "";
	document.getElementById("czasA").innerHTML = "Odliczanie zakończone... startujemy!!!";
	stopInterval();
	Status = false;
	}
	if (ms == 0){
		ms = 980;
		s--;
	}
	
}
function stopInterval() {
	clearInterval(interval);
}