
function initialize() {
  log = document.getElementById("log");
  logMessage("Initializing...");

  myCharacter = new Character("Batman");

  myCharacter.sayHello();


  myEnemy = new Enemy("Joker");

  myEnemy.sayHello();


  characterHealthbar = document.getElementById("characterhealthbar");
  characterHealthbar.value = myCharacter.maxHealth;
  characterHealthbar.max = myCharacter.maxHealth;
  characterHealthbar.optimum = myCharacter.maxHealth;
  characterHealthbar.low = (myCharacter.maxHealth * 0.3);
  characterHealthText = document.getElementById("characterhealthtext");
  characterHealthText.innerText = myCharacter.maxHealth + "/" + myCharacter.maxHealth;
  characterDeathsText = document.getElementById("characterdeathstext");

  enemyHealthbar = document.getElementById("enemyhealthbar");
  enemyHealthbar.value = myEnemy.maxHealth;
  enemyHealthbar.max = myEnemy.maxHealth;
  enemyHealthbar.optimum = myEnemy.maxHealth;
  enemyHealthbar.low = (myEnemy.maxHealth * 0.3);
  enemyHealthText = document.getElementById("enemyhealthtext");
  enemyHealthText.innerText = myEnemy.maxHealth + "/" + myEnemy.maxHealth;
  enemyDeathsText = document.getElementById("enemydeathstext");
}

function logMessage(msg) {
  log.value = log.value + msg + "\n";
  log.scrollTop = log.scrollHeight;
}
