define(["virality"], function(v) {
    
    var physic = function(gridSize) {
        var self = this;

        self.update = function(entity) {
            detectScreenCollisions(entity, gridSize);
        }
    }

    function detectScreenCollisions(entity, gridSize) {
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
    }

    return physic;

});