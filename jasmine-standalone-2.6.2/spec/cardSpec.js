describe("Testing Card Class", function(){
	var card;
  beforeEach(function(){
    var card = new Card(11, 2);
  });

	describe("constructor()", function(){
    	it("Sets suit= Diamond", function(){
      		expect(card.getSuit()).toEqual("Diamond");
    	});
    it("Sets face = Jack", function () {
    	expect(card.getFace()).toEqual("Jack");
    	});
  });
	describe("cardToString()",function(){
    	it("prints out card", function(){
    		expect(card.toString()).toEqual("Jack");
  		});
	});
	describe("pointValue()", function(){
		it("prints out point value", function(){
      		expect(card.handValue()).toEqual(10);
    	});
  	});
});