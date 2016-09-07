
function initialize() {
  log = document.getElementById("log");
  logMessage("Initializing...");

  myHero.sayHello();
  myEnemy.sayHello();

  heroHealthbar = document.getElementById("herohealthbar");
  heroHealthbar.value = myHero.maxHealth;
  heroHealthbar.max = myHero.maxHealth;
  heroHealthbar.optimum = myHero.maxHealth;
  heroHealthbar.low = (myHero.maxHealth * 0.3);
  heroHealthText = document.getElementById("herohealthtext");
  heroHealthText.innerText = myHero.maxHealth + "/" + myHero.maxHealth;
  heroDeathsText = document.getElementById("herodeathstext");

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
