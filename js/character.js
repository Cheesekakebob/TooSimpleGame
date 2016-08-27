
var Character = function (name) {
  this.characterName = name;
};

Character.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.characterName);
};

var myCharacter = new Character("Batman");

myCharacter.sayHello();
