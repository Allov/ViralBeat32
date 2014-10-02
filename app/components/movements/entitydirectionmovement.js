define([], function() {
    
    var input = function() {
        
        var self = this;
        
        this.update = function(entity) {
            entity.lastPosition = entity.position;
            entity.position.x += entity.direction.x * entity.speed;
            entity.position.y += entity.direction.y * entity.speed;
        }
        
    }
    
    return input;
});