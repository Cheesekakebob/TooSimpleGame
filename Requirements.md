#Level 0 Requirements

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

#Level 1

1. Character has basic stats that affect its health and attack values  
a. Character's stats are displayed in some sort of UI with tooltips showing what they do  

2. Default Enemy has same basic stats as Character, affecting its health and attack values  
a. Enemy stats are hidden, no need to display to User (for now?)  

#Level 2

1. Character has fancy sprite representation  
a. Simple animations display when Character attacks  

2. Enemy has fancy sprite representation  
a. Simple animations display when Enemy attacks  

#Future Ideas

- User can choose a class for their character with different starting stat allocations
- Character can use different abilities specific to their class
- Add MP to Character in order to use abilities
- Add status effects that can occur with certain abilities
