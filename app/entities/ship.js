define([], function() {
    
    var ship = function(graphic, input, physic) {

        var shielded = false,
            position = {x: 0, y: 0},
            velocity = {x: 0, y: 0},
            dimensions = {w: 7, h: 7},
            speed = 0.05,
            visible = true;

        var self = this;
        
        self.name = "Ship";
        self.visible = visible;
        self.systems = ["physic"];

        self.moving = function() {
            return self.velocity.y !== 0 || self.velocity.x !== 0;
        };
        
        self.position = position;
        self.velocity = velocity;
        self.speed = speed;
        self.dimensions = dimensions;
        
        self.shoot = function() {
            
        }
        
        self.useShield = function() {
            shielded = s;
        }

        self.update = function(context, elapsed) {
            input.update(self, elapsed);
            physic.update(self);
            graphic.update(self, context);
        };
    }

    return ship;
});