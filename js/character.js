
var Character = function (inputname) {

  this.name = inputname;

  this.health = 10;

  this.attackDmg = 2;

};



Character.prototype.sayHello = function() {

  console.log("Hello, I'm " + this.name + ". I have " + this.health + " health and do " + this.attackDmg + " damage!");

};



Character.prototype.attack = function() {
  console.log("Attack made for " + this.attackDmg + "!");
};

var myCharacter = new Character("Batman");



myCharacter.sayHello();
