# General concept
* Players start a new game with ~5 randomly generated stage.
* Each stage takes 2-5 minutes to clear.
* Each stage consist of 1-4 mini-boss and 1 boss.
* Beating the boss of a stage unlocks the next stage.

# Game mechanics (concept)
* Main ships have a weapon slot and shield slot.
* Main ships don't gain xp or level, but gain upgrade through enchancers.
* All main ships gets the enchancer bonus once activated.
* Ennemies drop currency (xp?) that can be used to buy weapons, shield and abilities.
    * Small ennemy 1 xp;
    * Larger ennemy 3-5 xp;
    * Mini-boss 25-50 xp;
    * Boss 200 xp;
* Ennemies drop armor refills randomly.
* Mini boss and boss will drop enhancers.
*
* Streak gives temporary bonuses.
* Each entity collision, either projectile or ennemy ships, will remove 1 armor from the ship colliding. Need to clarify how multiple ship collision will work:
    * Do the ennemy ship is destroyed upon impact or it also lose 1 armor?
    * If it loses 1 armor, what's the cooldown between armor loss.
    * If it doesn't lose armor, being destroyed upon impact, how to handle bosses?

# Enhancers (examples)
* Ability enhancer: +2 abilities (increases abilities by a factor of 2)
* Attack speed enhancer: +2 attack speed (increases attack speed by a factor 2)
* Armor enhancer: +2 armor (increases armor by a factor of 2)
* Weapon enhancer: +2 projectile enchancement (inscreases weapon by a factor of 2).

# Weapons (example)
> Weapons would give more projectile and projectile patterns.

* Croissant de lune: Fires 3+FACTOR projectiles in an arc pattern in front of the main ship.
* Rail gun: Fires 2 rails of 1+FACTOR projectiles side by side.
* S,S-1: Fires 2+FACTOR projectiles. Every even projectile get FACTOR*sin(x) and odd projectiles get FACTOR*sin(x)*-1 patterns.
* Circle: fires 1+FACTOR waves of projectiles starting at the main ship's position in a circle around the main ship.

# Shields (example)
> Shields should probably give small fun buffs that replenishes through time?

* Lightning shield:
