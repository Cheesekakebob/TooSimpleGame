
var Character = function (inputname) {

  this.name = inputname;

  this.maxHealth = 10;
  this.currentHealth = this.maxHealth;
  this.attackDmg = 2;

  this.deaths = 0;
};


Character.prototype.sayHello = function() {

  logMessage("User Character: Hello, I'm " + this.name + ". I have " + this.maxHealth + " health and do " + this.attackDmg + " damage!");

};



Character.prototype.takeDamage = function(damage) {
  this.currentHealth -= damage;
  characterHealthbar.value = this.currentHealth;
  characterHealthText.innerText = myCharacter.currentHealth + "/" + myCharacter.maxHealth;
  if (this.currentHealth <= 0) {
    this.deaths += 1;
    characterDeathsText.innerText = this.deaths;
    this.currentHealth = this.maxHealth;
    characterHealthbar.value = this.currentHealth;
    characterHealthText.innerText = myCharacter.currentHealth + "/" + myCharacter.maxHealth;
    logMessage("Game Message: You've been fatally wounded! That's " + this.deaths + " times! Here's a full heal!");
  }
};


Character.prototype.attack = function(target) {
  logMessage("User Character: Attack made for " + this.attackDmg + " damage against " + target.name + "!");
  var killed = myEnemy.takeDamage(this.attackDmg);
  if (!killed) {
    myEnemy.attack(myCharacter);
  }
};
