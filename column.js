export default class Column {
  constructor(){
    this.tokens = [null, null, null, null, null, null];

  }
  add(currentPlayer){
    let bottomMost = -1;
    for (let i = 0; i < this.tokens.length; i++){
      let token = this.tokens[i];
      if (token === null){
        bottomMost = i;
      }
    }
    this.tokens[bottomMost] = currentPlayer;
  }
}