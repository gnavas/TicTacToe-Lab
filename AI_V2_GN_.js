window.addEventListener("load",function(){

	var counter = 0;
	var move = "X";
	var change = "x";
	var getEmpty = document.getElementsByClassName("empty");
	var x="X";
	var o="O";
	var playerQue = "Player 1";
	var turn = document.getElementsByClassName("player");
	var scoreBoard = document.getElementsByClassName("scoreboard");
	var playerAWins = 0;
	var playerBWins = 0;
	var upperLeft = document.getElementById("ul");
	var upperMiddle = document.getElementById("um");
	var upperRight = document.getElementById("ur");
	var middleLeft = document.getElementById("ml");
	var middleMiddle = document.getElementById("mm");
	var middleRight = document.getElementById("mr");
	var bottomLeft = document.getElementById("bl");
	var bottomMiddle = document.getElementById("bm");
	var bottomRight = document.getElementById("br");
	var boardArr = ["A","B","C","D","E","F","G","H","I"];
	var fourCorners = ["A","C","G","I"];
	var innerBlock = ["B","D","H","F"];
	var rightTouch = ["C","I"];
	var rPlay = rightTouch[Math.floor( Math.random() * rightTouch.length )];
	var leftTouch = ["A","G"];
	var lPlay = leftTouch[Math.floor( Math.random() * leftTouch.length )];
	var upperTouch = ["A","C"];
	var uPlay = upperTouch[Math.floor( Math.random() * upperTouch.length )];
	var bottomTouch = ["G","I"];
	var bPlay = bottomTouch[Math.floor( Math.random() * bottomTouch.length )];
	
	
	function cornerTouch(){
		console.log("Corner Touch");
		if(middleRight.innerHTML == "X"){
			if(rPlay == "C"){
				playC();
		}	else if (rPlay == "I"){
				playI();
		}
}		
		if(middleLeft.innerHTML == "X"){
			if(lPlay == "A"){
				playA();
		}	else if (lPlay == "G"){
				playG();
		}
}
		if(upperMiddle.innerHTML == "X"){
			if(uPlay == "A"){
				playA();
		}	else if (uPlay == "C"){
				playC();
		}
}
		if(bottomMiddle.innerHTML == "X"){
			if(bPlay == "G"){
				playG();
		}	else if (bPlay == "I"){
				playI();
		}
}
}
	

	function insideBlock(){
		console.log("inside Blocker");
		inside = (innerBlock[Math.floor( Math.random() * innerBlock.length )]);
		console.log(inside);
		if (inside == "B"){playB(); 
		} 
		else if(inside=="D"){playD();
		}
		else if(inside=="H"){playH();
		}
		else if(inside=="F"){playF();
		}
	}

	function cornerBlock(){
		corner = (fourCorners[Math.floor( Math.random() * fourCorners.length )]);
		if (corner == "A"){playA(); 
		} 
		else if(corner=="C"){playC();
		}
		else if(corner=="G"){playG();
		}
		else if(corner=="I"){playI();
		}
	}

	function bobby(){
		bob = (boardArr[Math.floor( Math.random() * boardArr.length )]);
		if (bob == "A"){playA(); 
		} 
		else if(bob=="B"){playB();
		}
		else if(bob=="C"){playC();
		}
		else if(bob=="D"){playD();
		}
		else if(bob=="E"){playE();
		}
		else if(bob=="F"){playF();
		}
		else if(bob=="G"){playG();
		}
		else if(bob=="H"){playH();
		}
		else if(bob=="I"){playI();
		}
	}

	function playerScoreCard(){
		location.reload();
		var boardArr = ["A","B","C","D","E","F","G","H","I"];
		if ((counter%2)===1) {
			playerAWins = playerAWins + 1;
			scoreBoard[0].innerHTML = "Player 1:" + playerAWins + "	"+ "Player 2:"+ playerBWins;
		} else {playerBWins = playerBWins + 1;
			scoreBoard[0].innerHTML = "Player 1:" + playerAWins + "	"+ "Player 2:"+ playerBWins;
		} if((playerAWins < 3) && (playerBWins < 3)) {resetBoard();
		} else {alert ("You Won 3 Games - Congrats! Click 'OK' to start a new series!");
		location.reload();
	}

}


function resetBoard() {

	var board = document.getElementsByTagName("td");
	for (var i = 0; i < board.length; i++) {
		board[i].setAttribute("class","empty");
		board[i].innerHTML = " ";
	}	
	if ((counter%2)===1){counter = 1;
	}else { counter = 0;
	}
	boardArr = [];
	start();
}

function player(event)
{
	if ((counter%2)===0){
		move = "X";
		change = "x";
		playerQue = "Player 2";
		var whoseTurn = "Your Move " + playerQue +"!";		
		event.target.setAttribute("class", change);
		event.target.innerHTML = move;
		counter++;
		event.target.removeEventListener("click",player);
		if ("ul"===event.target.id) {
			for(var i in boardArr){
				if(boardArr[i]=="A"){
					boardArr.splice(i,1);
					break;
				}
			}
		}

		if ("um"===event.target.id) {
			for(var x in boardArr){
				if(boardArr[x]=="B"){
					boardArr.splice(x,1);
					break;
				}
			}
		}
		if ("ur"===event.target.id) {
			for(var x in boardArr){
				if(boardArr[x]=="C"){
					boardArr.splice(x,1);
					break;
				}
			}
		}

		if ("ml"===event.target.id) {
			for(var x in boardArr){
				if(boardArr[x]=="D"){
					boardArr.splice(x,1);
					break;
				}
			}
		}
		{
			for(var x in boardArr){
				if(boardArr[x]=="E"){
					boardArr.splice(x,1);
					break;
				}
			}
		}

		if ("mr"===event.target.id) {
			for(var x in boardArr){
				if(boardArr[x]=="F"){
					boardArr.splice(x,1);
					break;
				}
			}
		}

		if ("bl"===event.target.id) {
			for(var x in boardArr){
				if(boardArr[x]=="G"){
					boardArr.splice(x,1);
					break;
				}
			}
		}

		if ("bm"===event.target.id) {
			for(var x in boardArr){
				if(boardArr[x]=="H"){
					boardArr.splice(x,1);
					break;
				}
			}
		}
		if ("br"===event.target.id) {
			for(var x in boardArr){
				if(boardArr[x]=="I"){
					boardArr.splice(x,1);
					break;
				}
			}
		}

		turn[0].innerHTML = whoseTurn;
		checkWinner();
		console.log(counter);
	} else if ((counter%2)===1) {
		move ="O";
		change = "o";
		playerQue = "Player 1";
		whoseTurn = "Your Move " + playerQue +"!";
		counter++;
		turn[0].innerHTML = whoseTurn;
		computer();
	}
}
function playA() {
	upperLeft.setAttribute("class",change);
	upperLeft.innerHTML = move;
	upperLeft.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="A"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playB() {
	upperMiddle.setAttribute("class",change);
	upperMiddle.innerHTML = move;
	upperMiddle.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="B"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playC() {
	upperRight.setAttribute("class",change);
	upperRight.innerHTML = move;
	upperRight.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="C"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playD() {
	middleLeft.setAttribute("class",change);
	middleLeft.innerHTML = move;
	middleLeft.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="D"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playE() {
	middleMiddle.setAttribute("class",change);
	middleMiddle.innerHTML = move;
	middleMiddle.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="E"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playF() {
	middleRight.setAttribute("class",change);
	middleRight.innerHTML = move;
	middleRight.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="F"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playG() {
	bottomLeft.setAttribute("class",change);
	bottomLeft.innerHTML = move;
	bottomLeft.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="G"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playH() {
	bottomMiddle.setAttribute("class",change);
	bottomMiddle.innerHTML = move;
	bottomMiddle.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="H"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}
function playI() {
	bottomRight.setAttribute("class",change);
	bottomRight.innerHTML = move;
	bottomRight.removeEventListener("click",player);
	for(var i in boardArr){
		if(boardArr[i]=="I"){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}

function computer() {
	var upperLeft = document.getElementById("ul");
	console.log(upperLeft);
	var upperMiddle = document.getElementById("um");
	var upperRight = document.getElementById("ur");
	var middleLeft = document.getElementById("ml");
	var middleMiddle = document.getElementById("mm");
	var middleRight = document.getElementById("mr");
	var bottomLeft = document.getElementById("bl");
	var bottomMiddle = document.getElementById("bm");
	var bottomRight = document.getElementById("br");
	var ul = document.getElementById("ul").textContent;
	var um = document.getElementById("um").textContent;
	var ur = document.getElementById("ur").textContent;
	var ml = document.getElementById("ml").textContent;
	var mm = document.getElementById("mm").textContent;
	var mr = document.getElementById("mr").textContent;
	var bl = document.getElementById("bl").textContent;
	var bm = document.getElementById("bm").textContent;
	var br = document.getElementById("br").textContent;

	if ((upperLeft.innerHTML === " ") && (um=="O" && ur=="O" || ml=="O" && bl=="O" || mm=="O" && br=="O")) {
		playA();
	}
	else if ((upperMiddle.innerHTML === " ") && (ul=="O" && ur=="O" || bm=="O" && mm=="O" )) {
		playB();
	}
	else if ((upperRight.innerHTML === " ") && (um=="O" && ul=="O" || mr=="O" && br=="O" || mm=="O" && bl=="O")) {
		playC();
	}
	else if ((middleLeft.innerHTML === " ") && (mm=="O" && mr=="O" || ul=="O" && bl=="O")) {
		playD();
	}
	else if ((middleMiddle.innerHTML === " ") && (ml=="O" && mr=="O" || um=="O" && bm=="O" || ul=="O" && br=="O" || ur=="O" && bl=="O")) {
		playE();
	}
	else if ((middleRight.innerHTML === " ") && (mm=="O" && ml=="O" || ur=="O" && br=="O" )) {
		playF();
	}
	else if ((bottomLeft.innerHTML === " ") && (bm=="O" && br=="O" || ml=="O" && ul=="O" || mm=="O" && ur=="O")) {
		playG();
	}
	else if ((bottomMiddle.innerHTML === " ") && (bl=="O" && br=="O" || um=="O" && mm=="O" )) {
		playH();
	}
	else if ((bottomRight.innerHTML === " ") && (bm=="O" && bl=="O" || mr=="O" && ur=="O" || mm=="O" && ul=="O")) {
		playI();
	}

	else if ((upperLeft.innerHTML === " ") && (um=="X" && ur=="X" || ml=="X" && bl=="X" || mm=="X" && br=="X")) {
		playA();
	}
	
	else if ((upperMiddle.innerHTML === " ") && (ul=="X" && ur=="X" || bm=="X" && mm=="X")) {
		playB();
	}
	else if ((upperRight.innerHTML === " ") && (um=="X" && ul=="X" || mr=="X" && br=="X" || mm=="X" && bl=="X")) {
		playC();
	}
	else if ((middleLeft.innerHTML === " ") && (mm=="X" && mr=="X" || ul=="X" && bl=="X")) {
		playD();
	}
	else if ((middleMiddle.innerHTML === " ") && (ml=="X" && mr=="X" || um=="X" && bm=="X" || ul=="X" && br=="X" || ur=="X" && bl=="X")) {
		playE();
	}
	else if ((middleRight.innerHTML === " ") && (mm=="X" && ml=="X" || ur=="X" && br=="X")) {
		playF();
	}
	else if ((bottomLeft.innerHTML === " ") && (bm=="X" && br=="X" || ml=="X" && ul=="X" || mm=="X" && ur=="X")) {
		playG();
	}
	else if ((bottomMiddle.innerHTML === " ") && (bl=="X" && br=="X" || um=="X" && mm=="X")) {
		playH();
	}
	else if ((bottomRight.innerHTML === " ") && (bm=="X" && bl=="X" || mr=="X" && ur=="X" || mm=="X" && ul=="X")) {
		playI();
	}
	else if ((counter<=4) && (ul=="X" && br =="X" || ur=="X" && bl =="X")){
		console.log("Made it to pre insideblock");
		insideBlock();
	}
	else if ((counter > 2 && counter<=4) && (middleMiddle.innerHTML === " ")){
		console.log("Made it to Fourth Play");
		playE();
	}
	else if(counter<=2) {
		if (middleMiddle.innerHTML === " ") {
			if ((upperMiddle.innerHTML === "X") || (bottomMiddle.innerHTML === "X") || (middleLeft.innerHTML === "X") || (middleRight.innerHTML === "X")){
				console.log("Made it to Crazy Blocker");
				cornerTouch();
			} else{
				playE();
			}
		} 
		else if(middleMiddle.innerHTML === "X"){
			cornerBlock();
		}
		else if(middleMiddle.innerHTML === "X"){
			cornerBlock();
		}
		else {
			bobby();
		}
	} 
	else {
		bobby();
	}

}

function checkWinner() { 
	var ul = document.getElementById("ul").textContent;
	var um = document.getElementById("um").textContent;
	var ur = document.getElementById("ur").textContent;
	var ml = document.getElementById("ml").textContent;
	var mm = document.getElementById("mm").textContent;
	var mr = document.getElementById("mr").textContent;
	var bl = document.getElementById("bl").textContent;
	var bm = document.getElementById("bm").textContent;
	var br = document.getElementById("br").textContent;

	if ((ul=="X" && um=="X" && ur=="X") || (ul=="O" && um=="O" && ur=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	} else if ((ml=="X" && mm=="X" && mr=="X") || (ml=="O" && mm=="O" && mr=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	} else if ((bl=="X" && bm=="X" && br=="X") || (bl=="O" && bm=="O" && br=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	} else if ((ul=="X" && ml=="X" && bl=="X") || (ul=="O" && ml=="O" && bl=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	}else if ((um=="X" && mm=="X" && bm=="X") || (um=="O" && mm=="O" && bm=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	}else if ((ur=="X" && mr=="X" && br=="X") || (ur=="O" && mr=="O" && br=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	}else if ((ul=="X" && mm=="X" && br=="X") || (ul=="O" && mm=="O" && br=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	}else if ((ur=="X" && mm=="X" && bl=="X") || (ur=="O" && mm=="O" && bl=="O")){
		alert("You Win!!! Click 'Ok' to play again!");
		playerScoreCard();
	}else if (getEmpty.length === 0) {
		alert("You Tied! Click 'Ok' to play again!");
		playerScoreCard();
	}else { if((counter%2)===0) {start();
	}else{player();
	}
}
}

function start() {for (var i = 0; i < getEmpty.length; i++) {
	if(getEmpty[i].innerHTML[0]===" ") {
		getEmpty[i].addEventListener("click", player);
	}
}
}
start();
});

