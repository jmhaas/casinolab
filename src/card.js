'use strict';

class Card{
	constructor( face, suit ){
	this.face = face;
	this.suit = suit;
	}

	getFace(){
		if(this.face < 11){
			return this.face;
		}
		if(this.face === 11){
			return "Jack";
		}
		if(this.face === 12){
			return "Queen";
		}
		if(this.face === 13){
			return "King";
		}
		else return "Ace";
	}

	getSuit(){
		if(this.suit === 1){
			return "Hearts";
		}
		if(this.suit === 2){
			return "Diamonds";
		}
		if(this.suit === 3){
			return "Spades";
		}
		else return "Clubs";
		}

	toString(){
		return this.getFace() + " of " + this.getSuit();
		}
}
