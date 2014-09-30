define([], function() {
    
    var entity = function(name, graphicHandler, inputHandler, physicHandler, destroyHandler) {
        
        // Data
        this.position = {x: 0, y: 0};
        this.dimensions = {w: 0, h: 0};
        this.direction = {x: 0, y: 0};
        this.velocity = {x: 0, y: 0};
        this.speed = 0;
        
        // Handlers
        this.graphicHandler = graphicHandler;
        this.inputHandler = inputHandler;
        this.physicHandler = physicHandler;
        this.destroyHandler = destroyHandler;

        // Virality
        this.name = name;
        this.visible = true;
        this.systems = [];
        this.destroyed = false;
    };
    
    entity.prototype.moving = function() {
        return this.velocity.y !== 0 || this.velocity.x !== 0;
    };
    
    entity.prototype.update = function(context, elapsed) {
        if (this.inputHandler) this.inputHandler.update(this, elapsed);
        if (this.physicHandler) this.physicHandler.update(this);
        if (this.graphicHandler) this.graphicHandler.update(this, context, elapsed);
    };
    
    entity.prototype.destroy = function() {
        if (this.destroyHandler) this.destroyHandler.destroy();
        this.destroyed = true;
    };
    
    return entity;
    
});