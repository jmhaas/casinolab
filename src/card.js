//"use strict";
//
//function Card{
//	constructor( face, suit ){
//	this.face = face;
//	this.suit = suit;
//	}
//
//	getFace(){
//		if(this.face < 11){
//			return this.face;
//		}
//		if(this.face === 11){
//			return "Jack";
//		}
//		if(this.face === 12){
//			return "Queen";
//		}
//		if(this.face === 13){
//			return "King";
//		}
//		else return "Ace";
//	}
//
//	getSuit(){
//		if(this.suit === 1){
//			return "Hearts";
//		}
//		if(this.suit === 2){
//			return "Diamonds";
//		}
//		if(this.suit === 3){
//			return "Spades";
//		}
//		else return "Clubs";
//		}
//	
//
//	toString(){
//		return this.getFace() + " " + "of" + " " + this.getSuit();
//		}
//}
//
//class Deck {
//	constructor(){
//		this.cards = this.createDeck();
//	}
//}
//
//	createDeck(){
//		var deck = [];
//		for(var i = 0; i < 10; i++){
//			for(var face = 2; face < 14; face++){
//				for(var suit = 1; suit < 4; suit++){
//					deck.push(new Card(suit, face));	
//				}
//			}
//		}
//		return deck;	
//	}
//
//	shuffle() {
//		for (var i =0; i< this.deckOfCards.length;i++) {
//      		var j = Math.floor(Math.random() * this.cards.length);
//      		var temp = this.cards[i];
//      		this.cards[i] = this.cards[j];
//      		this.cards[j] = temp;
//    		}
//		}
//
//	dealCard(){
//		if(this.deck.length >= 0){
//			this.card = this.createDeck();
//			this.shuffle;
//			}
//			return this.card.pop();
//		}
//
//
//class Hand{
//	constructor(){
//		this.cards = [];
//	}
//}
//	
//	addCard(){
//		this.card.push(card);
//	}
//
//	totalCardsInHand(){
//		return this.cards.length;
//	}
//	
//	handToString(){
//		var cardsInHand = "";
//		for(var i = 0; i < this.cards.length; i++){
//			cardsInHand = this.cards[i];
//		}
//		return cardsInHand;
//	}
//
//	handValue(){
//		var isAce = false;
//		this.size = this.cardsInHand();
//		var totalHandValue = 0;
//	
//		for(var i = 0; i < size; i++){
//			totalHandValue += this.cards[i].rankValue();
//			if(this.cards[i].rankValue() === 1){
//				isAce = true;
//			}
//		}
//		if(totalHandValue < 12 && isAce){
//			return totalHandValue + 10;
//		}
//		else return totalHandValue;
//	}
//
//class Player {
//	constructor(wallet){
//		this.wallet = wallet;
//	}
//}
//
//	makeBet(amount){
//		if(this.wallet >= amount){
//			this.wallet -= amount;
//		}
//		else{
//			alert("Game Over");
//		}
//		return this.wallet;
//	}
//	
//finish wallet
//
//complete logic
//
////add dealer?...only can have outcomes higher than 17 
//



