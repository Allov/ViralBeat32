define(["virality"], function(v) {
    var layers = [];
    var layersVelocity = [0.05, 0.1, 0.25];

    var layersPosition = [
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0}
    ];
    
    var layersColors = [
        [64, 64, 32, 255],
        [64, 64, 64, 255],
        [96, 96, 96, 255]
    ];
    
    var starsSpec = [
        {w: 4, h: 2},
        {w: 2, h: 2},
        {w: 2, h: 1}
    ];
    
    var layerCount = 3,
        options = {
            starCount: 50
        };
        
    var starfield = function(settings) {
        var self = this;

        self.name = "Starfield";
        self.visible = true;

        self.config = function(settings) {
            for(var i in settings) {
                options[i] = settings[i];
            }
        };
        
        self.init = function() {
            
            for(var i = 0; i < layerCount; i++) {
                var layer = document.createElement("canvas");
                layer.width = v.viewport.w;
                layer.height = v.viewport.h;
                layers.push(layer);
            }

            if (options.size) {
                for(var j in starsSpec) {
                    starsSpec[j].w = starsSpec[j].h = options.size;
                }
            }
            
            for(var j in layers) {
                var context = layers[j].getContext("2d");
                for(var i = 0; i < options.starCount; i++) {
                    var x = Math.floor((Math.random() * layers[j].width) + 1);
                    var y = Math.floor((Math.random() * layers[j].height) + 1);

                    x = x >> 2;
                    x = x << 2;
                    y = y >> 2;
                    y = y << 2;
                    
                    if (v.viewport.w - x <= starsSpec[j].w) { x -= v.viewport.w - starsSpec[j].w }
                    if (x <= starsSpec[j].w) { x += starsSpec[j].w }
                    
                    context.fillStyle = "rgba(" + layersColors[j][0] + "," + layersColors[j][1] + "," + layersColors[j][2] + "," + layersColors[j][3] + ")";
                    context.fillRect(x, y, starsSpec[j].w, starsSpec[j].h);

                    context.shadowBlur = 20;
                    context.shadowColor = "rgba(" + layersColors[j][0] + "," + layersColors[j][1] + "," + layersColors[j][2] + "," + layersColors[j][3] + ")";
                }
            }
        }

        self.update = function(context, elapsed) {
            for(var i in layers) {
                layersPosition[i].x += layersVelocity[i] * elapsed;

                var width = layers[i].width - layersPosition[i].x;
                
                if (width < 1) width = 1;
                if (width > v.viewport.w) {
                    width = v.viewport.w;
                }
                
                context.drawImage(layers[i], 
                    layersPosition[i].x, layersPosition[i].y, 
                    width, v.viewport.h, 
                    0, 0, 
                    width, v.viewport.h);
                
                /*context.strokeStyle = "#F00";
                context.lineWidth = 1;
                context.strokeRect(0, 0, width, v.viewport.h);*/
                
                var followWidth = v.viewport.w - width;
                context.drawImage(layers[i], 
                    1, layersPosition[i].y, 
                    followWidth, v.viewport.h, 
                    width, 0, 
                    followWidth, v.viewport.h);

                /*context.strokeStyle = "#0F0";
                context.lineWidth = 1;
                context.strokeRect(width, 0, followWidth, v.viewport.h);*/

                if (layersPosition[i].x >= (v.viewport.w - 2)) {
                    layersPosition[i].x = 0;
                }
            }
        }

        self.config(settings);
    };
    
    return starfield;
});
