define([], function() {
    
    var pbuffer = function(pattern, size, color) {
        var self = this;
        var patternCanvas = document.createElement("canvas");
        var patternContext = patternCanvas.getContext("2d");
        
        drawPattern(patternContext, pattern, size, color);
        
        self.draw = function(context, x, y) {
            context.drawImage(patternCanvas, (x * size), (y * size));
        };
    }
    
    return pbuffer;
    
    function drawPattern(context, pattern, size, color) {
        context.clearRect(0, 0, pattern[0].length * size, pattern.length * size);
        for(var i in pattern) {
            for(var j in pattern[i]) {
                var c = pattern[i].charAt(j);

                context.shadowBlur = 0;

                if (c == "f") {
                    drawPixel(context, j, i, size, "#fff");
                }

                if (c == "e") {
                    drawPixel(context, j, i, size, "#eee");
                }

                if (c == "c") {
                    drawPixel(context, j, i, size, "#ccc");
                }

                if (c == "o") {
                    context.shadowBlur = 20;
                    context.shadowColor = "#fa8";
                    drawPixel(context, j, i, size, "#fa8");
                }
 
                if (c == "u") {
                    context.shadowBlur = 20;
                    context.shadowColor = "#ee8";
                    drawPixel(context, j, i, size, "#ee8");
                }

                if (c == "x") {
                    drawPixel(context, j, i, size,color);
                }
            }
        }
    }

    function drawPixel(context, x, y, size, color) {
        context.fillStyle = color;
        context.fillRect(x * size, y * size, size, size);
    }
    
});