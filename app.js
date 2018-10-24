var scores, roundScore, activePlayer, over;

initGame();

function nextPlayer(){
	activePlayer = activePlayer === 0 ? 1 : 0;
	var prevActivePlayer = activePlayer == 1 ? 0 : 1;

	var currentDOM = document.querySelector('#current-'+prevActivePlayer);
	var prevActivePlayerDOM = document.querySelector('.player-'+prevActivePlayer+'-panel');
	var nextActivePlayerDOM = document.querySelector('.player-'+activePlayer+'-panel');

	currentDOM.textContent = 0;
	prevActivePlayerDOM.classList.toggle('active');
	nextActivePlayerDOM.classList.toggle('active');
}

function initGame(){
	scores = [0,0];
	roundScores = 0;
	activePlayer = 0;
	over=false;
	var prevActivePlayer = activePlayer == 1 ? 0 : 1;

	document.querySelector('#current-'+activePlayer).textContent = 0;
	document.querySelector('#current-'+prevActivePlayer).textContent = 0;
	document.querySelector('#score-'+activePlayer).textContent = 0;
	document.querySelector('#score-'+prevActivePlayer).textContent = 0;
	document.querySelector('.player-'+activePlayer+'-panel').classList.replace('winner', 'active');
	document.querySelector('.player-'+prevActivePlayer+'-panel').classList.remove('active', 'winner');
	document.querySelector('#name-'+activePlayer).textContent = 'Player '+(activePlayer+1);
	document.querySelector('#name-'+prevActivePlayer).textContent = 'Player '+(prevActivePlayer+1);
}

document.querySelector('.btn-roll').addEventListener('click', function(){
	
	var dice = Math.floor(Math.random()*6)+1;
	var diceDOM = document.querySelector('.dice');
	var currentDOM = document.querySelector('#current-'+activePlayer);
	var scoreDOM = document.querySelector('#score-'+activePlayer);
	var activePlayerDOM = document.querySelector('.player-'+activePlayer+'-panel');
	var activePlayerName = document.querySelector('#name-'+activePlayer);

	diceDOM.src = 'dice-'+dice+'.png';

	if(!over){
		if(dice===1){
			scoreDOM.textContent = 0;
			scores[activePlayer]=0;	
			nextPlayer();	
		}
		if(dice!==1){
			scores[activePlayer]+=dice
			currentDOM.textContent = dice;
			scoreDOM.textContent = scores[activePlayer];
		}
		if(scores[activePlayer]>=20){
			activePlayerDOM.classList.replace('active', 'winner');
			activePlayerName.textContent = 'Winner!';
			diceDOM.style.display = 'none';
			over = true;
		}
	}

})

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(!over){
		nextPlayer();
	}
})

document.querySelector('.btn-new').addEventListener('click', initGame)



