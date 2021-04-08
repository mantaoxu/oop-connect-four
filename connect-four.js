import Game from './game.js'

let game = undefined;


//updates the User Interface
function updateUI(){
  let targets = document.getElementById('click-targets');
  let board = document.getElementById('board-holder');
  if(game !== undefined) {
    board.classList.remove('is-invisible');
    let gameName = document.getElementById('game-name');
    gameName.innerHTML = game.getName();

    if(game.currentPlayer === 1){
      targets.classList.add('red');
      targets.classList.remove('black')
    }else{
      targets.classList.add('black')
      targets.classList.remove('red')
    }

  }
  else {
    board.classList.add('is-invisible');
  }
};

window.addEventListener("DOMContentLoaded", event => {

  let playOneInput = document.getElementById('player-1-name');
  let playTwoInput = document.getElementById('player-2-name');
  let newGameButton = document.getElementById('new-game');
  let targets = document.getElementById('click-targets');

  targets.addEventListener('click', event=>{
    game.playInColumn() //this will switch the current play in this.currentPlayer
    updateUI();
  })

    function checkForBothPlayers(){
        //checks if player one and play two input is null
        let isPlayerOne = playOneInput.value.length > 0
        let isPlayerTwo = playTwoInput.value.length > 0

        //if both player one and two have a name
        if (isPlayerOne  &&  isPlayerTwo){
            //enable new game
            newGameButton.disabled = false;
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