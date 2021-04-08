class Column {
  constructor(){
    this.tokens = [];
    //[1, 1, 2, 2, 1, 1]

  }
  add(currentPlayer){
    //-1 means there is not free space found
    let bottomMost = -1;
    //start at the bottom index of the array, iterate up
    for (let i = 5; i >= 0; i--){
      //pull that current iterative token index from this.tokens
      let token = this.tokens[i];
      //if there is no token there
      if (token === undefined){
        //set that to be the current bottomMost
        bottomMost = i;
        break;
      }
    }
    if(bottomMost > -1){
      this.tokens[bottomMost] = currentPlayer;
    }
  }


  /*

  game.this.columns = 
  [
      column1 = [undefined, undefined, undefined, undefined, undefined, undefined, ],
      column2 = [undefined, undefined, undefined, undefined, undefined, undefined, ],
                [undefined, undefined, undefined, undefined, undefined, undefined, ]
                [undefined, undefined, undefined, undefined, undefined, undefined, ]
                [undefined, undefined, undefined, undefined, undefined, undefined, ]
                [undefined, undefined, undefined, undefined, undefined, undefined, ]
                [undefined, undefined, undefined, undefined, undefined, undefined, ]
  ]
    //this.currentplayer
    //the names of player 1 and 2



          //this is the change of boards after four turns

 game.this.columns =      [
        column1 = [undefined, undefined, undefined, undefined, undefined, undefined, ],
        column2 = [undefined, undefined, undefined, undefined, undefined, 1, ],
                  [undefined, 1, 2, 2, 1, 2, ]
                  [undefined, undefined, undefined, undefined, undefined, 2, ]
                  [undefined, undefined, undefined, undefined, undefined, undefined, ]
                  [undefined, undefined, undefined, undefined, undefined, undefined, ]
                  [undefined, undefined, undefined, undefined, undefined, undefined, ]
      ]


  */

  getTokenAt(rowIndex){
    //first pull the token at the specified rowIndex
    //check if undefined
    //return either null or the player's token at that index
    let token = this.tokens[rowIndex];

      //game.getTokenAt(5,2)
      //const column = game.getColumn(2)
      //column. getTokenAt(5)

    if(token === undefined){
      return null;
    }else{
      return token;
    }
  }
  
}
export default Column;