define(["virality", "components/pattern"], function(v) {
    
    var patternRenderer = function(pattern, size, color) {
        var self = this;

        var patternCanvas,
            patternContext,
            hollow,
            color = color || "#fff";

        patternCanvas = document.createElement("canvas");
        patternContext = patternCanvas.getContext("2d");
        drawPattern(patternContext, pattern, size, hollow, color);

        self.setPattern = function(p) {
            pattern = p;

            if (patternContext) {
                drawPattern(patternContext, pattern, size, hollow, color);
            }
        };

        self.draw = function(context, x, y) {
            context.drawImage(patternCanvas, (x * size), (y * size));
        }

        self.hollow = function(c) {
            hollow = c;
            drawPattern(patternContext, pattern, size, hollow, color);
        }
    }

    return patternRenderer;

    function drawPattern(context, pattern, size, hollow, color) {
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

                if (hollow && c != " ") {
                    context.shadowBlur = 40;
                    context.shadowColor = hollow;
                    context.globalAlpha = 0.7;

                    drawPixel(context, j, i, size, hollow);
                    context.shadowBlur = 0;
                    context.globalAlpha = 1;
                }
            }
        }
    }

    function drawPixel(context, x, y, size, color) {
        context.fillStyle = color;
        context.fillRect(x * size, y * size, size, size);
    }

});