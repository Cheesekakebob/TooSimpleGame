var Enemy = function (inputname) {
  this.name = inputname;
  this.health = 4;
  this.attackDmg = 1;
};

Enemy.prototype.sayHello = function() {
  console.log("Grrr, I'm " + this.name + ". I have " + this.health + " health and do " + this.attackDmg + " damage!");
};

var myEnemy = new Enemy("Joker");

myEnemy.sayHello();
