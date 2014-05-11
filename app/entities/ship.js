define(["components/pattern"], function(Pattern) {
    
    var projectilePattern = ["x"];

    var date = Date.now();

    var ship = function(pattern, input, mover, physic) {

        var projectiles = [],
            shielded = false,
            position = {x: 0, y: 0},
            velocity = {x: 0, y: 0},
            speed = 0.05;

        var self = this;
        
        self.moving = function() {
            return self.velocity.y !== 0 || self.velocity.x !== 0;
        };
        
        self.position = position;
        self.velocity = velocity;
        self.speed = speed;
        
        self.shoot = function() {
            
        }
        
        self.useShield = function() {
            shielded = s;
        }

        self.update = function(context, elapsed) {
            input.update(self);
            mover.update(self, elapsed);
            //physic.update(self);
            pattern.update(context, self);
        };
    }

    return ship;
});