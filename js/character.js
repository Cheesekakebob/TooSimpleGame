
var Character = function (type, inputname, maxhp, atkdmg) {
  this.charType = type;
  this.name = inputname;
  this.maxHealth = maxhp;
  this.currentHealth = this.maxHealth;
  this.attackDmg = atkdmg;
  this.deaths = 0;
  this.takeDamage = function() {console.log("Error, base class call to takeDamage!");};
  this.attack = function() {console.log("Error, base class call to attack!");};
};


Character.prototype.sayHello = function() {
  logMessage(this.charType + ": Hello, I'm " + this.name + ". I have " + this.maxHealth + " health and do " + this.attackDmg + " damage!");
};

var myHero = new Character("Hero", "Batman", 10, 2);
var myEnemy = new Character("NPC Enemy", "Joker", 5, 1);

myHero.takeDamage = function(damage) {
  this.currentHealth -= damage;
  heroHealthbar.value = this.currentHealth;
  heroHealthText.innerText = myHero.currentHealth + "/" + myHero.maxHealth;
  if (this.currentHealth <= 0) {
    this.deaths += 1;
    heroDeathsText.innerText = this.deaths;
    this.currentHealth = this.maxHealth;
    heroHealthbar.value = this.currentHealth;
    heroHealthText.innerText = myHero.currentHealth + "/" + myHero.maxHealth;
    logMessage("Game Message: You've been fatally wounded! That's " + this.deaths + " times! Here's a full heal!");
  }
};

myHero.attack = function(target) {
  logMessage("User Character: Attack made for " + this.attackDmg + " damage against " + target.name + "!");
  var killed = myEnemy.takeDamage(this.attackDmg);
  if (!killed) {
    myEnemy.attack(myHero);
  }
};

myEnemy.takeDamage = function(damage) {
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

myEnemy.attack = function(target) {
  logMessage("NPC Enemy: Attack made for " + this.attackDmg + " damage against " + target.name + "!");
  myHero.takeDamage(this.attackDmg);
};
