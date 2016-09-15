
var Character = function (type, inputname, maxhp, atkdmg) {
  this.charType = type;
  this.name = inputname;
  this.maxHealth = maxhp;
  this.currentHealth = this.maxHealth;
  this.attackDmg = atkdmg;
  this.deaths = 0;
  this.critChance = 10;
  this.dodgeChance = 5;
  this.sayHello = function() {logMessage(this.charType + ": Hello, I'm " + this.name + ". I have " + this.maxHealth + " health and do " + this.attackDmg + " damage!");};
  this.takeDamage = function() {console.log("Error, base class call to takeDamage!");};
  this.attack = function() {console.log("Error, base class call to attack!");};
  this.setCritChance = function(crit) { this.critChance = crit;};
  this.critRoll = function() {return (Math.floor((Math.random() * 100) + 1) <= this.critChance) ? 2:1;};
  this.hitRoll = function(targetDodge) {return (Math.floor((Math.random() * 100) + 1) <= targetDodge) ? 0:1;};
};

var myHero = new Character("Hero", "Batman", 10, 2);
var myEnemy = new Character("NPC Enemy", "Joker", 5, 1);

myHero.experience = 0;
myHero.healAmount = 4;
myEnemy.expvalue = 2;

myHero.gainExperience = function(exp) {
  this.experience += exp;
  logMessage("Game Message: Gained " + exp + " experience!");
  if (this.experience >= 10) {
    if (this.critChance < 100) {
      logMessage("Leveled Up! Stats increased!");
      this.setCritChance(this.critChance+1);
	  this.experience = 0;
	} else {
	  logMessage("Max Level Reached! Stats Maxed!");
	  this.experience = -9999;
	}
  }
  update();
};

myHero.healMe = function(heal) {
  ((this.currentHealth + heal) > this.maxHealth) ? this.currentHealth = this.maxHealth : this.currentHealth += heal;
  logMessage("Hero: Healed for " + heal + " health!");
  update();
  myEnemy.attack(myHero)
}

myHero.takeDamage = function(damage) {
  this.currentHealth -= damage;
  if (this.currentHealth <= 0) {
    this.deaths += 1;
    this.currentHealth = this.maxHealth;
    logMessage("Game Message: You've been fatally wounded! That's " + this.deaths + " times! Here's a full heal!");
  }
  update();
};

myHero.attack = function(target) {
  myHero.attackAnim();
  hit = this.hitRoll(myEnemy.dodgeChance);
  if (hit) {
    dmg = this.attackDmg*this.critRoll(this.critChance);
    logMessage("Hero: Attack made for " + dmg + " damage against " + target.name + "!");
    killed = myEnemy.takeDamage(dmg);
    (!killed) ? setTimeout(function() {myEnemy.attack(myHero);}, 2000):myHero.gainExperience(myEnemy.expvalue);
  } else {
    logMessage("Hero: Attacked but " + myEnemy.name + " dodged!");
	setTimeout(function() {myEnemy.attack(myHero);}, 2000);
  }
};

myHero.attackAnim = function() {
    attackButton.disabled = true;
    var elem = document.getElementById("heropic"); 
    var pos = 94;
	var reachedEnd = false;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 320) {
		    reachedEnd = true;
        } 
		if (pos == 95 && reachedEnd) {
            attackButton.disabled = false;
		    clearInterval(id);
		}
		if (!reachedEnd) {
            pos++; 
        } else {
		    pos--;
		}
        elem.style.left = pos + 'px'; 
    }
};

myEnemy.takeDamage = function(damage) {
  this.currentHealth -= damage;
  if (this.currentHealth <= 0) {
    this.deaths += 1;
    this.currentHealth = this.maxHealth;
    logMessage("Game Message: " + this.name + " has been killed! That's " + this.deaths + " times! Here comes another one!");
	update();
    return true;
  }
  update();
  return false;
};

myEnemy.attack = function(target) {
  myEnemy.attackAnim();
  hit = this.hitRoll(myHero.dodgeChance);
  if (hit) {
    logMessage(myEnemy.name + ": Attack made for " + this.attackDmg + " damage against " + target.name + "!");
    myHero.takeDamage(this.attackDmg);
  } else {
    logMessage(myEnemy.name + ": Attacked but " + myHero.name + " dodged!");
  }
};

myEnemy.attackAnim = function() {
    attackButton.disabled = true;
    var elem = document.getElementById("enemypic"); 
    var pos = 320;
	var reachedEnd = false;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 120) {
		    reachedEnd = true;
        } 
		if (pos == 319 && reachedEnd) {
		    attackButton.disabled = false;
		    clearInterval(id);
		}
		if (!reachedEnd) {
            pos--; 
        } else {
		    pos++;
		}
        elem.style.left = pos + 'px'; 
    }
};
