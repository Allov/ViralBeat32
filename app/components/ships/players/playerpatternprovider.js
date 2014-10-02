define([], function() {
    var shipPattern = ["       ",
                       " cc    ",
                       "  ec   ",
                       " efec  ",
                       "  ec   ",
                       " cc    ",
                       "       "];
    
    var shipMovingPattern = ["       ",
                             " cc    ",
                             "uoec   ",
                             " efec  ",
                             "uoec   ",
                             " cc    ",
                             "       "];
                             
    var patterns = [];

    var patternProvider = function(size, color) {
        var self = this;

        patterns.push(shipPattern);
        patterns.push(shipMovingPattern);
       
        self.idle = function() {
            return shipPattern;
        }

        self.moving = function() {
            return shipMovingPattern;
        }

        self.size = size || 16;
        self.color = color || "#fff";
    }
   
    return patternProvider;
});