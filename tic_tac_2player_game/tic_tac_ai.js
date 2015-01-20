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


function playerScoreCard(){
	console.log(counter);
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
	start();
}

	function player(event)
	{
		if ((counter%2)===0){
			var move = "X";
			var change = "x";
			var playerQue = "Player 2";
			var whoseTurn = "Your Move " + playerQue +"!";	
		}
		if ((counter%2)===1) {
			move ="O";
			change = "o";
			playerQue = "Player 1";
			whoseTurn = "Your Move " + playerQue +"!";
		}
		event.target.setAttribute("class", change);
		event.target.innerHTML = move;
		counter++;
		event.target.removeEventListener("click",player);
		turn[0].innerHTML = whoseTurn;
		
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
			resetBoard();
		}else {start();
		}
	}
	function start() {for (var i = 0; i < getEmpty.length; i++) {
		if(getEmpty[i].innerHTML[0]===" ") {
		getEmpty[i].addEventListener("click", player);
	}
	}
}
alert("First to 3 Wins!");
start();
});

