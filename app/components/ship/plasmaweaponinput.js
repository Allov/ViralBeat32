define([], function() {
    
    var input = function() {
        
        var self = this;
        
        this.update = function(entity) {
            entity.position.x += entity.velocity.x * entity.speed;
            entity.position.y += entity.velocity.y * entity.speed;
        }
        
    }
    
    return input;
});