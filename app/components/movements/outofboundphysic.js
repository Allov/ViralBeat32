define(["virality"], function(v) {
    var physic = function(dimensions) {
        
        var self = this;
        self.dimensions = dimensions;
        
        self.update = function(entity) {
            if (entity.position.x < 0 || entity.position.x > self.dimensions.w ||
                entity.position.y < 0 || entity.position.y > self.dimensions.h) {
                entity.destroyed = true;
            }
        }
        
    };
    
    return physic;
});