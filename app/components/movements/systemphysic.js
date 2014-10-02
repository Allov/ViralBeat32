define(["virality"], function(v) {
    
    var physic = function(gridSize, system) {
        var self = this;

        self.update = function(entity) {
            detectScreenCollisions(entity, gridSize, system);
        }
    }

    function detectScreenCollisions(entity, gridSize, system) {
        if (entity.position.x < 0) {
            entity.position.x = 0;
        }

        if (entity.position.x >= gridSize.w - entity.dimensions.w) {
            entity.position.x = gridSize.w - entity.dimensions.w;
        }

        if (entity.position.y < 0) {
            entity.position.y = 0;
        }

        if (entity.position.y >= gridSize.h - entity.dimensions.h) {
            entity.position.y = gridSize.h - entity.dimensions.h;
        }
        
        var entities = v.entities(system);
        for(var i in entities) {
            var current = entities[i];
            
            if (current.owner != entity && v.collide(current, entity, gridSize)) {
                current.destroy();
                entity.destroy();
            }
        }
    }

    return physic;

});