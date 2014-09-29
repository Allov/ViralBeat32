define([], function() {
    var box = function(entity, color) {
        
        var self = this;
        
        self.entity = entity;
        
        self.visible = false;
        self.systems = ["debug"];
        
        self.update = function(context, elapsed) {
            context.strokeStyle = color;
            context.strokeRect(self.entity.position.x * 4, self.entity.position.y * 4, self.entity.dimensions.w * 4, self.entity.dimensions.h * 4);
        }
    }
    
    return box;
});