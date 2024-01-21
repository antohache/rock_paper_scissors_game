"use strict"

function makeMove(playerMove) {
    var options = ['rock', 'scissors', 'paper'];
    var computerMove = options[Math.floor(Math.random() * options.length)];

    var result = '';

    if (playerMove === computerMove) {
        result = 'Ничья!';
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'scissors' && computerMove === 'paper') ||
        (playerMove === 'paper' && computerMove === 'rock')
    ) {
        result = 'Вы победили!';
    } else {
        result = 'Вы проиграли!';
    }

    document.getElementById('game').innerHTML = '<div class="result">' + result + '</div>';
}