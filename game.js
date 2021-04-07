class Game{
    constructor(playerOne, playerTwo){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo
    }
    getName(){
        return `${this.playerOne} vs. ${this.playerTwo}`;
    }
}

export default Game;