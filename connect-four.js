import Game from './game.js'

// let game = new Game ('Peter', 'Doris');
// console.log(game);
let game = undefined;

window.addEventListener("DOMContentLoaded", event => {
  let playOneInput = document.getElementById('player-1-name');
  let playTwoInput = document.getElementById('player-2-name');
  let newGameButton = document.getElementById('new-game');
  playOneInput.addEventListener('keyup', event => {
    newGameButton.removeAttribute('disabled');

  })
  playTwoInput.addEventListener('keyup', event => {
    newGameButton.removeAttribute('disabled');

  })

})