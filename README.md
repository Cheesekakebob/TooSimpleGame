#Witty Header Commit Here

1. User has a respresentation of a character
  a. Character has health that is displayed dynamically in the UI
  b. Character has an attack that does x damage and is displayed over enemy when used

2. A default enemy needs to be represented
  a. Enemy has health that is displayed dynamically in the UI
  b. Enemy has an attack that does x damage and is displayed over Character when used

3. A turn based system so that input can be taken from the User and Enemy can take an action

4. User has a way to trigger attack (aka button) on their turn

5. Enemy default attacks on their turn

6. Character and Enemy visually lose health when taking damage
  a. Whenever Character reaches 0 health, reset game
  b. When Enemy reaches 0 health, spawn new enemy
