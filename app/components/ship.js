define(["virality", "components/pattern"], function(v, Pattern) {
    
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
    var projectilePattern = ["x"];
    var keys = {
        up: 38, 
        down: 40,
        left: 37,
        right: 39,
        space: 32,
        F: 70,
        f: 102
    };

    var date = Date.now();

    var shipObject = function(settings) {
        var options = {
            x: 0,
            y: 16,
            size: 16,
            delay: 0
        };
        
        var pattern,
            projectiles = [],
            shielded = false,
            velocity = {x: 0, y: 0},
            shootSound;

        var self = this;        

        self.config = function(settings) {
            for(var i in settings) {
                options[i] = settings[i];
            }
        };

        self.move = function(elapsed) {
            options.x += velocity.x * elapsed;
            if (options.x < 0) {
                options.x = 0;
            } else if (options.x > 25) {
                options.x = 25;
            }

            options.y += velocity.y * elapsed;
            if (options.y < 0) {
                options.y = 0;
            } else if (options.y > 23) {
                options.y = 23;
            }

            if (velocity.x != 0 || velocity.y != 0) {
                pattern.setPattern(shipMovingPattern);
            } else {
                pattern.setPattern(shipPattern);
            }
        }

        self.shoot = function() {
            proj = new Pattern(projectilePattern, options.size);
            projectiles.push(proj);
            proj.x = options.x + 3;
            proj.y = options.y + 3;

            var sound = shootSound.cloneNode();
            sound.play();
        }

        self.init = function() {
            pattern = new Pattern(shipMovingPattern, options.size);
            shootSound = v.load("shoot.wav");
        }

        self.update = function(elapsed) {
            self.move(elapsed);

            if (shielded) {
                pattern.hollow("#8df");
            } else {
                pattern.hollow("");
            }

            for(var i in projectiles) {
                projectiles[i].x += (0.07 * elapsed);
            }
        }

        self.render = function(context, elapsed) {
            pattern.draw(context, options.x, options.y);
            for(var i in projectiles) {
                projectiles[i].draw(context, projectiles[i].x, projectiles[i].y);
            }
        }

        function canMove() {
            var current = Date.now();
            return current - date > options.delay;
        }

        window.onkeyup = function(e) {
            if (!canMove()) {
                return;
            }

            var key = e.keyCode ? e.keyCode : e.which;

            if (key == keys.f || key == keys.F) {
                shielded = !shielded;
            }

            if (key == keys.space) {
                self.shoot();
            }

            if (key == keys.up && velocity.y < 0) {
                velocity.y = 0;
            } 

            if (key == keys.down && velocity.y > 0) {
                velocity.y = 0;
            } 

            if (key == keys.left && velocity.x < 0) {
                velocity.x = 0;
            } 

            if (key == keys.right && velocity.x > 0) {
                velocity.x = 0;
            }
        }

        window.onkeydown = function(e) {
            if (!canMove()) {
                return;
            }

            var key = e.keyCode ? e.keyCode : e.which;

            if (key == keys.up) {
                velocity.y = -0.05;
            } 

            if (key == keys.down) {
                velocity.y = 0.05;
            }

            if (key == keys.left) {
                velocity.x = -0.05;
            } 

            if (key == keys.right) {
                velocity.x = 0.05;
            }
        }

        self.config(settings);
    }

    return shipObject;
});