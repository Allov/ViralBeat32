define(["components/patternbuffer"], function(PatternBuffer) {
    
    var pattern = function(patternProvider) {
        var self = this;
        
        var idle = new PatternBuffer(patternProvider.idle(), patternProvider.size, patternProvider.color);
        var moving = new PatternBuffer(patternProvider.moving(), patternProvider.size, patternProvider.color);
        
        self.update = function(context, entity) {
            if (entity.moving()) {
                moving.draw(context, entity.position.x, entity.position.y);
            } else {
                idle.draw(context, entity.position.x, entity.position.y);
            }
        }
    }

    return pattern;
});