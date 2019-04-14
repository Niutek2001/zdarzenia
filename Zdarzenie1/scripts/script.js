var login;
var zaint;
var lock = 0;
var cow = new Audio('sounds/cow.mp3');

function send(){
	login = document.getElementById("login").value;
	zaint = document.getElementById("zaint").value;
	if ((login != "") && (zaint != "wybierz")) {
	document.getElementById("podpisA").innerHTML = "Dziękuję " + login + " za podanie swojego zainteresownia: " + zaint;
	}
	else if ((login == "") || (zaint == "wybierz")) {
		if ((login == "") && (zaint == "wybierz")) {
		alert("Pola \"Login\" i \"Twoje zainteresowanie\" są puste");
		}
		else if (login == ""){
		alert("Pole \"Login\" jest puste");
		}
		else if (zaint == "wybierz"){
		alert("Pole \"Twoje zainteresowanie\" jest puste");
		}
	}
document.getElementById("formularz").innerHTML = '<span id=tytul>Formularz</span><br><br><form>Login: <input type=text id=login name="login"><br>Twoje zainteresowanie: <select name="zainteresowanie" id=zaint><option disabled selected>wybierz</option><option value="wioslarstwo">wioślarstwo</option><option value="narciarstwo">narciarstwo</option><option value="programowanie">programowanie</option><option value="inne">inne</option></select><br><br><button class=przycisk onclick="send();">Wyślij</button> <button class=przycisk type="reset" onclick="rest()">Reset</button></form>'
}

function rest(){
	document.getElementById("podpisA").innerHTML = "";
}

function hover(){
	if (lock == 0){
	lock = 1;
	cow.play();
	}
	document.getElementById("podpis").innerHTML = "Krowa z gry Minecraft";
}

function restart() {
	document.getElementById("podpis").innerHTML = "";
	setTimeout(locked, 800);

}

function locked(){
	lock = 0;
}