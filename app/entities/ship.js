define(["entities/entity"], function(Entity) {
    
    var ship = function(name, graphicHandler, inputHandler, physicHandler, destroyHandler, weaponHandler, soundHandler) {
        Entity.call(this, name, graphicHandler, inputHandler, physicHandler, destroyHandler);
        
        this.armor = 1;

        this.weaponHandler = weaponHandler;
        this.soundHandler = soundHandler;
        
        this.systems.push("physic");
    }
    
    ship.prototype = Object.create(Entity.prototype);
    var _super_ = Entity.prototype;

    ship.prototype.shoot = function() {
        if (this.weaponHandler) this.weaponHandler.shoot(this);
    };
        
    ship.prototype.destroy = function() {
        _super_.destroy.call(this);
        if (this.soundHandler) this.soundHandler.destroyed();
    };

    return ship;
});