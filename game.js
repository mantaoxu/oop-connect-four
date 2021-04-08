import Column from "./column.js";

class Game{
    constructor(playerOne, playerTwo, currentPlayer=1){
        
        this.playerOne = playerOne;//PeterM
        this.playerTwo = playerTwo  //Doris
        this.currentPlayer = currentPlayer //1 
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];

    }
    getName(){
        return `${this.playerOne} vs. ${this.playerTwo}`;
    }

    //could also be named changePlayer()
    playInColumn(columnIndex){
        let column = this.columns[columnIndex];
        // column.add


        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        }else{
            this.currentPlayer = 1;
        }


    }

}

export default Game;