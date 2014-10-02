define([], function() {
   
    var input = function(x, y) {
        var self = this;
        var date;
       
        self.update = function(entity, elapsed) {
           
            if (!date) {
                date = Date.now();
            }
           
            var delta = Date.now() - date;
           
            if (delta > 1000 && delta < 3000) {
                entity.velocity.x = 0;
            } else {
                entity.velocity.x = entity.speed * -1;
                //entity.velocity.y = TODO
               
                entity.position.x += entity.velocity.x * elapsed;
                //entity.position.y = (Math.sin(entity.position.x) * 4 + y);
               
            }
        }
    }
   
    return input;
    
});