class Column {
  constructor(){
    this.tokens = [];
    //6 undefined

  }
  add(currentPlayer){
    let bottomMost = -1;
    for (let i = 6; i > 0; i--){
      let token = this.tokens[i];
      //debugger;
      if (token === undefined){
        bottomMost = i;
      }
    }
    if(bottomMost > -1){
      this.tokens[bottomMost] = currentPlayer;
    }
  }

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