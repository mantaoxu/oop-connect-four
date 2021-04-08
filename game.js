class Game{
    constructor(playerOne, playerTwo, currentPlayer=1){
        
        this.playerOne = playerOne;//PeterM
        this.playerTwo = playerTwo  //Doris
        this.currentPlayer = currentPlayer //1 
    }
    getName(){
        return `${this.playerOne} vs. ${this.playerTwo}`;
    }

    //could also be named changePlayer()
    playInColumn(){
        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        }else{
            this.currentPlayer = 1;
        }

    }
}

export default Game;