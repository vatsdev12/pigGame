/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//document.querySelector("#score-0").textContent = dice;
var score, roundScore, dice, activePlayer, gamePlaying, previousScore;

init()

document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        //  var dice=6;

        var diceDom = document.querySelector(".dice");
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        console.log("ppppppp", previousScore);
        if (previousScore === 6 && dice === 6) {
            roundScore = 0;
            document.querySelector("#current-" + activePlayer).textContent = 0;
            document.querySelector("#score-" + activePlayer).textContent = 0;
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
            document.querySelector(".player-0-panel").classList.toggle('active')
            document.querySelector(".player-1-panel").classList.toggle('active')
        }
        previousScore = dice;

        if (dice === 1) {
            roundScore = 0;
            document.querySelector("#current-" + activePlayer).textContent = 0;
            diceDom.style.display = 'none';
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
            document.querySelector(".player-0-panel").classList.toggle('active')
            document.querySelector(".player-1-panel").classList.toggle('active')

        }
        else {
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
    }

})

document.querySelector(".btn-hold").addEventListener('click', function () {
    if (gamePlaying) {
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = 'none';
        score[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];
        var input = document.querySelector(".final-score").value;
        console.log(">>>", input);

        var winningScore;
        if (input) {
            winningScore = input;
        }
        else {
            winningScore = 100;
        }
        if (score[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner"
            diceDom.style.display = 'none';
            // rollDOM.style.display = "none"
            gamePlaying = false;

        } else {
            roundScore = 0;
            document.querySelector("#current-" + activePlayer).textContent = 0;
            diceDom.style.display = 'none';
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
            document.querySelector(".player-0-panel").classList.toggle('active')
            document.querySelector(".player-1-panel").classList.toggle('active')
        }
    }



})

document.querySelector(".btn-new").addEventListener('click', function () {
    init();


})

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    previousScore = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = 'none';
    var rollDOM = document.querySelector(".btn-roll");
    gamePlaying = true;

}