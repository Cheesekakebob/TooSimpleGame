
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
  heroDamageText = document.getElementById("herodamagetext");
  heroDamageText.innerText = myHero.attackDmg;
  heroCritText = document.getElementById("herocrittext");
  heroCritText.innerText = myHero.critChance;
  heroDodgeText = document.getElementById("herododgetext");
  heroDodgeText.innerText = myHero.dodgeChance;
  heroHealText = document.getElementById("herohealtext");
  heroHealText.innerText = myHero.healAmount;

  enemyHealthbar = document.getElementById("enemyhealthbar");
  enemyHealthbar.value = myEnemy.maxHealth;
  enemyHealthbar.max = myEnemy.maxHealth;
  enemyHealthbar.optimum = myEnemy.maxHealth;
  enemyHealthbar.low = (myEnemy.maxHealth * 0.3);
  enemyHealthText = document.getElementById("enemyhealthtext");
  enemyHealthText.innerText = myEnemy.maxHealth + "/" + myEnemy.maxHealth;
  enemyDeathsText = document.getElementById("enemydeathstext");
  enemyNameText = document.getElementById("enemynametext");
  enemyNameText.innerText = myEnemy.name;
}

function update() {
  heroHealthbar.value = myHero.currentHealth;
  heroHealthText.innerText = myHero.currentHealth + "/" + myHero.maxHealth;
  heroDeathsText.innerText = myHero.deaths;
  heroDamageText.innerText = myHero.attackDmg;
  heroCritText.innerText = myHero.critChance;
  heroDodgeText.innerText = myHero.dodgeChance;
  heroHealText.innerText = myHero.healAmount;
  
  enemyHealthbar.value = myEnemy.currentHealth;
  enemyHealthText.innerText = myEnemy.currentHealth + "/" + myEnemy.maxHealth;
  enemyDeathsText.innerText = myEnemy.deaths;
  enemyNameText.innerText = myEnemy.name;
}

function logMessage(msg) {
  log.value = log.value + msg + "\n";
  log.scrollTop = log.scrollHeight;
}
