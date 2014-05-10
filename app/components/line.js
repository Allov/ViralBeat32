define([], function() {
    
    var line = function(size) {
        var self = this;

        self.draw = function(context, x, y, x1, y1, color) {
            for(var i = x; i <= x1; i++) {
                for(var j = y; j <= y1; j++) {
                    context.fillStyle = color;
                    context.fillRect(i * size, j * size, size, size);
                }
            }
        }
    }

    return line; 
});