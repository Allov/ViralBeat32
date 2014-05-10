define(["virality", "components/font", "components/line", "components/ship", "components/ennemy"], 
    function(v, Font, Line, Ship, Ennemy) {

    var stage = function() {
        var self = this;
        var stageText = new Font("stage", 16, "#fff");
        var stageNumberText = new Font("  1  ", 16, "#FFFF00");
        var readyText = new Font("ready", 16, "#fff");
        var goText = new Font(" go! ", 16, "#fff");
        var topLine = new Line(16);
        var bottomLine = new Line(16);

        var chrono = Date.now();

        var ennemies = [];
        var mainShip = new Ship({x: 0, y: 23, size: 16, delay: 19000 });

        self.init = function() {
            v.components(mainShip);

            for(var i = 0; i < 5; i++) {
                var ennemy = new Ennemy({x: 32, y: (i * 4) + 6, delay: 20000});
                ennemies.push(ennemy);
                v.components(ennemy);
            }

            var audio = v.load("chip2.ogg");
            audio.volume = 0.7;
            audio.play();
        }

        self.update = function(elapsed) {

        }

        self.render = function(context, elapsed) {
            var current = Date.now();
            var delta = current - chrono;

            if (delta < 14000) {
                topLine.draw(context, 0, 8, 32, 8, "#FF00FF");
                stageText.draw(context, 0, 10);
                stageNumberText.draw(context, 0, 16);
                bottomLine.draw(context, 0, 22, 32, 22, "#FF00FF");
            } else if (delta < 16000) {
                topLine.draw(context, 0, 8, 32, 8, "#FF00FF");
                readyText.draw(context, 0, 13);
                bottomLine.draw(context, 0, 22, 32, 22, "#FF00FF");
            } else if (delta >= 16000 && delta < 19000) {
                topLine.draw(context, 0, 8, 32, 8, "#FF00FF");
                if (Math.floor(delta / 200) % 2 == 0) {
                    goText.draw(context, 0, 13);
                }
                bottomLine.draw(context, 0, 22, 32, 22, "#FF00FF");
            }
        }
    }

    return stage;

});