class Deck{ 
	constructor(){
		this.cards = createDeck;
		//this.createDeck()
	}
}

	createDeck(){
		var deck = [];
		for(var i = 0; i < 10; i++){
			for(var face = 2; face < 14; face++){
				for(var suit = 1; suit < 4; suit++){
					deck.push(new Card(suit, face));	
				}
			}
		}
		return deck;	
	}

	shuffle() {
		for (var i =0; i< this.deckOfCards.length;i++) {
      		var j = Math.floor(Math.random() * this.cards.length);
      		var temp = this.cards[i];
      		this.cards[i] = this.cards[j];
      		this.cards[j] = temp;
    		}
		}

	function dealCard(){
		return this.cards.pop();
		}

