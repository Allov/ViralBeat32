define(["components/pattern"], function (Pattern) {
    var ennemyPattern = [" x ",
                         "xo ",
                         " x "]

    var ennemy = function(settings) {
        var self = this;
        var pattern;
        var date = Date.now();
        var options = {
            size: 16,
            x: 16,
            y: 16,
            delay: 0
        };

        for(var i in settings) {
            options[i] = settings[i];
        }

        self.init = function() {
            pattern = new Pattern(ennemyPattern, options.size, "red");
        }

        var x = options.x, y = options.y;

        self.update = function(elapsed) {

            var current = Date.now();

            if (current - date > options.delay) {
                x = x + (elapsed * -0.005);
                y = (Math.sin(x) * 4 + options.y);
            }
        }

        self.render = function(context, elapsed) {
            pattern.draw(context,x, y);
        }
    };

    return ennemy;
});