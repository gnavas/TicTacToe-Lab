/* Brief Summary: Following code generates a game of tic tac toe (Player 1 vs AI). 
A tic tac toe board has 9 moves that a player can make. The nine different moves
are represented 3 separate ways in this code. 1) [A,B,C,D,E,F,G,H,I] - A represnts the top left move
on the board, E represents middle move on the board, and I represents the bottom right move on the board, etc.
2) [ul,um,ur,ml,mm,mr,bl,bm,br] -  represent "td" #s from the HTML code. ul === A, mm === E, br === I, etc.
3) var([UpperLeft],[upperMiddle][upperRight], [middleLeft],[middleMiddle],[middleRight],[bottomLeft],[bottomMiddle]
[bottomRIght]) - variables represent the elements associated with the ids ^ previously described. */

window.addEventListener("load",function(){
// Variable list from lines 10 to line 39//
	var counter = 0;
	var move = "X";
	var change = "x";
	var getEmpty = document.getElementsByClassName("empty");
	var x="X";
	var o="O";
	var playerQue = "Player 1";
	var scoreBoard = document.getElementsByClassName("scoreboard");
	var upperLeft = document.getElementById("ul");
	var upperMiddle = document.getElementById("um");
	var upperRight = document.getElementById("ur");
	var middleLeft = document.getElementById("ml");
	var middleMiddle = document.getElementById("mm");
	var middleRight = document.getElementById("mr");
	var bottomLeft = document.getElementById("bl");
	var bottomMiddle = document.getElementById("bm");
	var bottomRight = document.getElementById("br");
	var boardArr = ["A","B","C","D","E","F","G","H","I"]; //keeps track of available board moves//
	var fourCorners = ["A","C","G","I"]; //used to play corner move at random//
	var innerBlock = ["B","D","H","F"]; // used to play inside moves at random//
	var rightTouch = ["C","I"];  //tracks right-side corner moves//
	var rPlay = rightTouch[Math.floor( Math.random() * rightTouch.length )];
	var leftTouch = ["A","G"];   // tracks left-side corenr moves//
	var lPlay = leftTouch[Math.floor( Math.random() * leftTouch.length )];
	var upperTouch = ["A","C"]; // tracks upper corner moves//
	var uPlay = upperTouch[Math.floor( Math.random() * upperTouch.length )];
	var bottomTouch = ["G","I"]; //tracks bottom corner moves//
	var bPlay = bottomTouch[Math.floor( Math.random() * bottomTouch.length )];
// playerScoreCard = Reloads page to replay the computer //
	function playerScoreCard(){
		location.reload();
}
/*   Function computerMaster executes the move to be played by the computers log. An example of the arguments passed
by Function compuer is as follows computerMaster(upperLeft,A)*/
function computerMaster(boardPlacement, boardLetter) {
	boardPlacement.setAttribute("class",change);
	boardPlacement.innerHTML = move;
	boardPlacement.removeEventListener("click",player); 
	for(var i in boardArr){  //removes availalbe move from the masterboard so that function bob cannot play a move that has already been executed//
		if(boardArr[i]==boardLetter){
			boardArr.splice(i,1);
			break;
		}
	}
	checkWinner();
}

//Lines 61 to ~ line 232 represent different strategies to play dependent on users first two moves//
	
// Function CornerTouch: Strategy employed to prevent loss when users first move is not a corner and not the middle square//
	function cornerTouch(){
		console.log("Corner Touch");
		if(middleRight.innerHTML == "X"){
			if(rPlay == "C"){
				computerMaster(upperRight,"C");
		}	else if (rPlay == "I"){
				computerMaster(bottomRight,"I");
		}
}		
		if(middleLeft.innerHTML == "X"){
			if(lPlay == "A"){
				computerMaster(upperLeft,"A");
		}	else if (lPlay == "G"){
				computerMaster(bottomLeft,"G");
		}
}
		if(upperMiddle.innerHTML == "X"){
			if(uPlay == "A"){
				computerMaster(upperLeft,"A");
		}	else if (uPlay == "C"){
				computerMaster(upperRight,"C");
		}
}
		if(bottomMiddle.innerHTML == "X"){
			if(bPlay == "G"){
				computerMaster(bottomLeft,"G");
		}	else if (bPlay == "I"){
				computerMaster(bottomRight,"I");
		}
}
}
//Function insideBlock is a strategy employed to prevent loss when the users first two moves are corners located diagonally from each other//
	function insideBlock(){
		console.log("inside Blocker");
		inside = (innerBlock[Math.floor( Math.random() * innerBlock.length )]);
		console.log(inside);
		if (inside == "B"){computerMaster(upperMiddle,"B"); 
		} 
		else if(inside=="D"){computerMaster(middleLeft,"D");
		}
		else if(inside=="H"){computerMaster(bottomMiddle,"H");
		}
		else if(inside=="F"){computerMaster(middleRight,"F");
		}
	}
//Function employed when users first move is middlesquare - computer will play a corner square//
	function cornerBlock(){
		corner = (fourCorners[Math.floor( Math.random() * fourCorners.length )]);
		if ((corner == "A")){computerMaster(upperLeft,"A"); 
		fourCorners.splice(0,1);
		} 
		else if(corner=="C"){computerMaster(upperRight,"C");
		fourCorners.splice(1,1);
		}
		else if(corner=="G"){computerMaster(bottomLeft,"G");
		fourCorners.splice(2,1);
		}
		else if(corner=="I"){computerMaster(bottomRight,"I");
		fourCorners.splice(3,1);
		}
		console.log("TOMMMMTTTT"+fourCorners);
	}
//If no other strategy is employed/play executed... function bobby selects a random move from the remaining available squares on the boards//
	function bobby(){
		bob = (boardArr[Math.floor( Math.random() * boardArr.length )]);
		if (bob == "A"){computerMaster(upperLeft,"A"); 
		} 
		else if(bob=="B"){computerMaster(upperMiddle,"B");
		}
		else if(bob=="C"){computerMaster(upperRight,"C");
		}
		else if(bob=="D"){computerMaster(middleLeft,"D");
		}
		else if(bob=="E"){computerMaster(middleMiddle,"E");
		}
		else if(bob=="F"){computerMaster(middleRight,"F");
		}
		else if(bob=="G"){computerMaster(bottomLeft,"G");
		}
		else if(bob=="H"){computerMaster(bottomMiddle,"H");
		}
		else if(bob=="I"){computerMaster(bottomRight,"I");
		}
	}

function player(event) // makes necessary changes to apply user moves//
{
	if ((counter%2)===0){ // even move is users move//
		move = "X";
		change = "x";	
		event.target.setAttribute("class", change);
		event.target.innerHTML = move;
		counter++;
		event.target.removeEventListener("click",player);
		var clickId = event.target.id;
		boardPlay(clickId);

		function boardPlay(x) {   // provides necessary input to Offboard nad offCorner in order to track moves played//
			if (x ==="ul") {offBoard("A");
			offCorner("A");
		}	if (x ==="um") {offBoard("B");
		}	if (x ==="ur") {offBoard("C");
			offCorner("C");
		}	if (x ==="ml") {offBoard("D");
		}	if (x ==="mm") {offBoard("E");
		}	if (x ==="mr") {offBoard("F");
		}	if (x ==="bl") {offBoard("G");
			offCorner("G");
		}	if (x ==="bm") {offBoard("H");
		}	if (x ==="br") {offBoard("I");
			offCorner("I");
		}
		}

		function offBoard(X){  // takes plays moved off the board - from the array boardArr//
			for(var i in boardArr){
				if(boardArr[i]==X){
					boardArr.splice(i,1);
					break;
				}
			}
			console.log(boardArr);
		}
		function offCorner(X){  // takes plays moved off the baord - from the array offCorner//
			for(var i in fourCorners){
				if(fourCorners[i]==X){
					fourCorners.splice(i,1);
					break;
				}
			}
			console.log(fourCorners);
		}

		checkWinner();
		console.log(counter);
	} else if ((counter%2)===1) { // odd move is computers move//
		move ="O";
		change = "o";
		counter++;
		computer();
	}
}

function computer() { // function serves as the logical brain for the computer//
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
// the first 8 board layouts are winning moves and the next 8 are blockers//
	if ((upperLeft.innerHTML === " ") && (um=="O" && ur=="O" || ml=="O" && bl=="O" || mm=="O" && br=="O")) {
		computerMaster(upperLeft,"A");
	}
	else if ((upperMiddle.innerHTML === " ") && (ul=="O" && ur=="O" || bm=="O" && mm=="O" )) {
		computerMaster(upperMiddle,"B");
	}
	else if ((upperRight.innerHTML === " ") && (um=="O" && ul=="O" || mr=="O" && br=="O" || mm=="O" && bl=="O")) {
		computerMaster(upperRight,"C");
	}
	else if ((middleLeft.innerHTML === " ") && (mm=="O" && mr=="O" || ul=="O" && bl=="O")) {
		computerMaster(middleLeft,"D");
	}
	else if ((middleMiddle.innerHTML === " ") && (ml=="O" && mr=="O" || um=="O" && bm=="O" || ul=="O" && br=="O" || ur=="O" && bl=="O")) {
		computerMaster(middleMiddle,"E");
	}
	else if ((middleRight.innerHTML === " ") && (mm=="O" && ml=="O" || ur=="O" && br=="O" )) {
		computerMaster(middleRight,"F");
	}
	else if ((bottomLeft.innerHTML === " ") && (bm=="O" && br=="O" || ml=="O" && ul=="O" || mm=="O" && ur=="O")) {
		computerMaster(bottomLeft,"G");
	}
	else if ((bottomMiddle.innerHTML === " ") && (bl=="O" && br=="O" || um=="O" && mm=="O" )) {
		computerMaster(bottomMiddle,"H");
	}
	else if ((bottomRight.innerHTML === " ") && (bm=="O" && bl=="O" || mr=="O" && ur=="O" || mm=="O" && ul=="O")) {
		computerMaster(bottomRight,"I");
	}

	else if ((upperLeft.innerHTML === " ") && (um=="X" && ur=="X" || ml=="X" && bl=="X" || mm=="X" && br=="X")) {
		computerMaster(upperLeft,"A");
	}
	
	else if ((upperMiddle.innerHTML === " ") && (ul=="X" && ur=="X" || bm=="X" && mm=="X")) {
		computerMaster(upperMiddle,"B");
	}
	else if ((upperRight.innerHTML === " ") && (um=="X" && ul=="X" || mr=="X" && br=="X" || mm=="X" && bl=="X")) {
		computerMaster(upperRight,"C");
	}
	else if ((middleLeft.innerHTML === " ") && (mm=="X" && mr=="X" || ul=="X" && bl=="X")) {
		computerMaster(middleLeft,"D");
	}
	else if ((middleMiddle.innerHTML === " ") && (ml=="X" && mr=="X" || um=="X" && bm=="X" || ul=="X" && br=="X" || ur=="X" && bl=="X")) {
		computerMaster(middleMiddle,"E");
	}
	else if ((middleRight.innerHTML === " ") && (mm=="X" && ml=="X" || ur=="X" && br=="X")) {
		computerMaster(middleRight,"F");
	}
	else if ((bottomLeft.innerHTML === " ") && (bm=="X" && br=="X" || ml=="X" && ul=="X" || mm=="X" && ur=="X")) {
		computerMaster(bottomLeft,"G");
	}
	else if ((bottomMiddle.innerHTML === " ") && (bl=="X" && br=="X" || um=="X" && mm=="X")) {
		computerMaster(bottomMiddle,"H");
	}
	else if ((bottomRight.innerHTML === " ") && (bm=="X" && bl=="X" || mr=="X" && ur=="X" || mm=="X" && ul=="X")) {
		computerMaster(bottomRight,"I");
	}//following represents situation logic//
	else if ((counter<=4) && (ul=="X" && br =="X" || ur=="X" && bl =="X")){
		console.log("Made it to pre insideblock"); // if user plays opposite diaganol corners for first two moves, comp must play inside move(B,D,F,H)//
		insideBlock();
	}
	else if ((counter > 2 && counter<=4) && (middleMiddle.innerHTML === " ")){
		console.log("Made it to Fourth Play"); // Ensures that if middle square has not been taken by computers 2nd move; computer will play middle square//
		computerMaster(middleMiddle,"E");
	}
	else if ((counter > 2 && counter<=4) && (middleMiddle.innerHTML === "X") && (upperLeft.innerHTML ==="X" || upperRight.innerHTML ==="X" || bottomLeft.innerHTML ==="X" || bottomRight.innerHTML ==="X")){
		console.log("Brady FLakes");	
		cornerBlock();
	}
	else if(counter<=2) {
		if (middleMiddle.innerHTML === " ") {
			if ((upperMiddle.innerHTML === "X") || (bottomMiddle.innerHTML === "X") || (middleLeft.innerHTML === "X") || (middleRight.innerHTML === "X")){
				console.log("Made it to Crazy Blocker"); //If user plays corner on first move, computer plays middle square//
				cornerTouch();							// If user plays non corner and non middle on first move - implement strategy function cornerTouch//
			} else{
				computerMaster(middleMiddle,"E");
			}
		} 
		else if(middleMiddle.innerHTML === "X"){ //if users first move is middle; computer plays a corner//
			cornerBlock();
		}
	} 
	else {
		bobby(); //if none of the conditions are met; send to bobby - where reandom move is played by computer//
	}
}
//Checks for winning combinations. Game ends if winner or tie is identified.//
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
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	} else if ((ml=="X" && mm=="X" && mr=="X") || (ml=="O" && mm=="O" && mr=="O")){
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	} else if ((bl=="X" && bm=="X" && br=="X") || (bl=="O" && bm=="O" && br=="O")){
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	} else if ((ul=="X" && ml=="X" && bl=="X") || (ul=="O" && ml=="O" && bl=="O")){
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	}else if ((um=="X" && mm=="X" && bm=="X") || (um=="O" && mm=="O" && bm=="O")){
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	}else if ((ur=="X" && mr=="X" && br=="X") || (ur=="O" && mr=="O" && br=="O")){
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	}else if ((ul=="X" && mm=="X" && br=="X") || (ul=="O" && mm=="O" && br=="O")){
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	}else if ((ur=="X" && mm=="X" && bl=="X") || (ur=="O" && mm=="O" && bl=="O")){
		alert("Game Over - you lose!!! Click 'Ok' to try again!");
		playerScoreCard();
	}else if (getEmpty.length === 0) {
		alert("Congrats, you tied! This is the best you'll ever do =( . If you don't believe me, click 'Ok' to play again!");
		playerScoreCard();
	}else { if((counter%2)===0) {start();
	}else{player();
	}
}
}
//Function start = Kicks off the game by adding event listeners to the entire board//
function start() {for (var i = 0; i < getEmpty.length; i++) {
	if(getEmpty[i].innerHTML[0]===" ") {   //Allows us to avoid readding event listeners to moves that have been played//
		getEmpty[i].addEventListener("click", player); 
	}
}
}
start();
});

