define([], function() {
    
    var input = function() {
        
        var self = this;
        
        this.update = function(entity) {
            entity.lastPosition = entity.position;
            entity.position.x += entity.velocity.x * entity.speed;
            entity.position.y += entity.velocity.y * entity.speed;
        }
        
    }
    
    return input;
});