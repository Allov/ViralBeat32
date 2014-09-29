define(["virality"], function(v) {
    
    var sound = function() {
        var explosion = v.load("explode.wav");
        var explosion2 = explosion.cloneNode();
        
        var shoot = v.load("shoot.wav");
        var shoots = [];
        
        for(var i = 0; i < 10; i++) {
            shoots.push(shoot.cloneNode());
        }
        
        var self = this;
        
        var currentShoot = 0;
        
        self.shoot = function() {
            shoots[currentShoot].play();
            currentShoot++;
            
            if (currentShoot >= shoots.length) {
                currentShoot = 0;
            }
        }
        
        self.destroyed = function() {
            if (explosion.paused) {
                explosion2.play();
            } else {
                explosion.play();
            }
        }
        
    }
    
    return new sound();
});