
class Deck {
constructor(cards){
    this.cards = cards ;
    let suits =['Spades', 'Diamonds','Hearts','Clubs'];
    let values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','King','Queen'];


}
}


class Card {
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }
}

class Player{
constructor(playerOne,playerTwo,score){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.score = score;
}
}
function startTheGame(){


}

let deck = new Deck();

for (let i = 0; i < suits.length; i++){

    for(let j = 0; j <values.length; j++){
        let newCard = new Card(suits[i], values[j]);
           }
           console.log(this.cards)
}
