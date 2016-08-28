
var Enemy = function (inputname) {

  this.name = inputname;

  this.maxHealth = 5;
  this.currentHealth = this.maxHealth;
  this.attackDmg = 1;

  this.deaths = 0;
};


Enemy.prototype.sayHello = function() {

  logMessage("NPC Enemy: Hello, I'm " + this.name + ". I have " + this.maxHealth + " health and do " + this.attackDmg + " damage!");

};



Enemy.prototype.takeDamage = function(damage) {
  this.currentHealth -= damage;
  enemyHealthbar.value = this.currentHealth;
  enemyHealthText.innerText = myEnemy.currentHealth + "/" + myEnemy.maxHealth;
  if (this.currentHealth <= 0) {
    this.deaths += 1;
    enemyDeathsText.innerText = this.deaths;
    this.currentHealth = this.maxHealth;
    enemyHealthbar.value = this.currentHealth;
    enemyHealthText.innerText = myEnemy.currentHealth + "/" + myEnemy.maxHealth;
    logMessage("Game Message: " + this.name + " has been killed! That's " + this.deaths + " times! Here comes another one!");
    return true;
  }
  return false;
};

Enemy.prototype.attack = function(target) {
  logMessage("NPC Enemy: Attack made for " + this.attackDmg + " damage against " + target.name + "!");
  myCharacter.takeDamage(this.attackDmg);
};
