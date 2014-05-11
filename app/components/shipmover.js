define([], function() {
    
    var mover = function() {
        var self = this;
        
        self.update = function(entity, elapsed) {
            entity.position.x += entity.velocity.x * elapsed;
            entity.position.y += entity.velocity.y * elapsed;
            
            
        }
    }
    
    return mover;
    
});