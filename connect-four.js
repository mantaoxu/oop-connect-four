import Game from './game.js'

// let game = new Game ('Peter', 'Doris');
// console.log(game);
let game = undefined;

function updateUI(){
  let board = document.getElementById('board-holder');
  if(game !== undefined) {
    board.classList.remove('is-invisible');
    let gameName = document.getElementById('game-name');
    gameName.innerHTML = game.getName();
  }
  else {
    board.classList.add('is-invisible');
  }
};

window.addEventListener("DOMContentLoaded", event => {

  let playOneInput = document.getElementById('player-1-name');
  let playTwoInput = document.getElementById('player-2-name');
  let newGameButton = document.getElementById('new-game');


    function checkForBothPlayers(){
        //checks if player one and play two input is null
        let isPlayerOne = playOneInput.value.length > 0
        let isPlayerTwo = playTwoInput.value.length > 0

        //if both player one and two have a name
        if (isPlayerOne  &&  isPlayerTwo){
            //enable new game
            newGameButton.disabled = false;//'('disabled');
        }else{
            newGameButton.disabled = true;
        }
    }

  playOneInput.addEventListener('keyup', event => {
    checkForBothPlayers()
  })

  playTwoInput.addEventListener('keyup', event => {
    checkForBothPlayers()
  })
  
  newGameButton.addEventListener('click', event=>{
      game = new Game(playOneInput.value, playTwoInput.value);
      playOneInput.value = '';
      playTwoInput.value = '';
      newGameButton.disabled = true;
      updateUI();

  })

})