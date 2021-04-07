class Game{
    constructor(playerOne, playerTwo, currentPlayer=1){
        
        this.playerOne = playerOne;
        this.playerTwo = playerTwo
        this.currentPlayer = currentPlayer
    }
    getName(){
        return `${this.playerOne} vs. ${this.playerTwo}`;
    }

    playInColumn(){
        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        }else{
            this.currentPlayer = 1;
        }

    }
}

export default Game;