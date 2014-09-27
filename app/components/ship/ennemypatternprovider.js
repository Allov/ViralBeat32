define([], function() {
    var idlePattern = [" x ",
                       "x  ",
                       " x "];
    
    var movingPattern = [" x ",
                         "xo ",
                         " x "];

    var provider = function(size, color) {
        var self = this;
        
        self.idle = function() {
            return idlePattern;
        }
        
        self.moving = function() {
            return movingPattern;
        }
        
        self.size = size || 16;
        self.color = color || "#fff";
    };
    
    return provider;
});