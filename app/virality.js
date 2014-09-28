define([], function() {
    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame;

    var canvas,
        buffer,
        context,
        contextBuffer,
        lastUpdate = Date.now(),
        fpsCurrent = 0,
        fpsCount = 0,
        elapsedTime = 0,
        entities = [],
        assets = [],
        pause = false;

    var options = {
        viewport: {},
        background: "#000",
        debug: true,
        assetsPath: "assets/"
    };
    
    var virality = {
        config: function(settings) {
            for(var i in settings) {
                options[i] = settings[i];
            }
            
            return virality;
        },
        init: function(w, h, canvasId) {
            options.viewport.w = w || 320;
            options.viewport.h = h || 200;
            
            if (!canvasId) {
                canvas = document.createElement("canvas");
                canvas.id = "virality";
                document.body.appendChild(canvas);
            } else {
                canvas = document.getElementById(canvasId);
            }

            buffer = document.createElement("canvas");

            canvas.width = buffer.width = options.viewport.w;
            canvas.height = buffer.height = options.viewport.h;
            
            context = canvas.getContext("2d");
            contextBuffer = buffer.getContext("2d");

            return virality;
        },
        update: function(elapsed) {
            contextBuffer.clearRect(0, 0, options.viewport.w, options.viewport.h);
            contextBuffer.fillStyle = options.background;
            contextBuffer.fillRect(0, 0, options.viewport.w, options.viewport.h);
            
            var toRemove = [];
            for(var i in entities) {
                var current = entities[i];
                
                if (current.update && current.visible) {
                    current.update(contextBuffer, elapsed);
                }
                
                if (current.destroyed) {
                    toRemove.push(i);
                }
            }
            
            for(var i in toRemove) {
                entities.splice(toRemove[i], 1);
            }

            context.drawImage(buffer, 0, 0, options.viewport.w, options.viewport.h);
        },
        start: function() {
            requestAnimationFrame(loop);
            return virality;
        },
        background: function(color) {
            options.background = color;
            return virality;
        },
        fps: function() {
            return fpsCurrent;
        },
        load: function(asset) {
            if (typeof(asset) == "string") {
                asset = {
                    name: asset,
                    media: asset
                };
            }
            
            var path = options.assetsPath + asset.media;
            var isAudio = path.match(/.*\.(mp3|ogg|wav)/g);
            var isImage = path.match(/.*\.(jpg|gif|png)/g);
            
            var media;
            if (!assets[asset.name]) {
                if (isAudio) {
                    virality.log("Loading audio asset: " + asset.name + "[" + path + "]", "loader");
                    media = new Audio();
                    media.src = path;
                    
                    assets[asset.name] = media;
                }
                
                if (isImage) {
                    virality.log("Loading image asset: " + asset.name + "[" + path + "]", "loader");
                    media = new Image();
                    media.src = path;
                    
                    assets[asset.name] = media;
                }
            }
            
            return media;
        },
        mute: function() {
            for(var i in assets) {
                if (assets[i].constructor == Audio) {
                    assets[i].volume = 0;
                }
            }
        },
        unmute: function() {
            for(var i in assets) {
                if (assets[i].constructor == Audio) {
                    assets[i].volume = 1;
                }
            }
        },
        add: function(entity) {
            if (entity.name) {
                virality.log("Adding: " + entity.name, "entity");
            }
            entities.push(entity);
            
            if (entity.init) {
                entity.init();
            }

            if (entity.systems && entity.systems.length > 0) {
                for(var i in entity.systems) {
                    var name = entity.systems[i];
                    if (!entities[name]) {
                        entities[name] = [];
                    }
                    
                    entities[name].push(entity);
                }
            }

            return entity;
        },
        entities: function(system) {
            if (system) {
                return entities[system];
            }

            return entities;
        },
        collide: function(a, b, gridSize) {
            var left = b.position.x - b.dimensions.w / 2;
            var right = b.position.x + b.dimensions.w / 2;
            var top = b.position.y - b.dimensions.h / 2;
            var bottom = b.position.y + b.dimensions.h / 2;
            
            if (a.position.x < left) return false;
            if (a.position.x > right) return false;
            if (a.position.y < top) return false;
            if (a.position.y > bottom) return false;
            
            return true;
            //return a.position.x >= left && a.position.x <= right && a.position.y <= bottom && a.position.y >= top;
        },
        assets: assets,
        viewport: options.viewport,
        log: function(message, entity) {
            if (options.debug && console) {
                console.log({ message: message, entity: entity });
            }
        },
        pause: function() {
            pause = !pause;

            for(var i in assets) {
                if (assets[i].constructor == Audio) {
                    if (pause) {
                        assets[i].pause();
                    } else {
                        assets[i].play();
                    }
                }
            }
        },
        isPaused: function() {
            return pause;
        }
    };
    
    return virality;
    
    function loop() {
        var now = Date.now();
        var elapsed = (now - lastUpdate);
        lastUpdate = now;
        elapsedTime += elapsed;

        if (!pause) {
            virality.update(elapsed);
        }

        fpsCount++;
        
        if (elapsedTime >= 1000) {
            fpsCurrent = fpsCount;
            elapsedTime = 0;
            fpsCount = 0;
        }
        
        requestAnimationFrame(loop);
    }
});