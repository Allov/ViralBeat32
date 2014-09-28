define([], function() {
   
   var projectile = function(x, y, dx, dy, graphic, input, physic) {
        
        var position = {x: x, y: y},
            velocity = {x: dx, y: dy},
            dimensions = {w: 1, h: 1},
            speed = 0.1,
            visible = true;

        var self = this;
       
        self.name = "Projectile";
        self.visible = visible;
        self.systems = ["physic", "projectile"];

        self.position = position;
        self.velocity = velocity;
        self.speed = speed;
        self.dimensions = dimensions;
        
        self.update = function(context, elapsed) {
            input.update(self, elapsed);
            //physic.update(self);
            graphic.update(self, context);
        };
   };
   
   return projectile;
    
});