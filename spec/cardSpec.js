describe("NewCard", function() { 
	//beforeEach(function() {
	//let	card = new Card();
	//});

	describe("When a new card is created", function(){
		let	card = new Card();
		it("should have face and suit values", function(){
			expect(card.toString()).toEqual("5 of Diamonds");
		});
	});



});






//describe("New Deck", function(){
//	it("length should be 52", function(){
//		expect(deck.deckOfCards.length).toBe(52);
//	});
//});
//	



//describe("cardToString()",function(){
//	it("prints out card", function(){
//		expect(Card.toString()).toEqual("Spade");
//	});
//});
//
//describe("pointValue()", function(){
//	it("prints out point value", function(){
//  		expect(Card.handValue()).toEqual(10);
//	});
//});
