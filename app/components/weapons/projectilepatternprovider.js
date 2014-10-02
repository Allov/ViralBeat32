define(["components/graphics/patternbuffer"], function(PatternBuffer) {
   
    var plasma = ["f"];
   
    var provider = function(size, color) {
        
        var self = this;
       
        var projectile = new PatternBuffer(plasma, size, color);

        self.update = function(entity, context) {
            projectile.draw(context, entity.position.x, entity.position.y);
        };

    };
   
    return provider;
});