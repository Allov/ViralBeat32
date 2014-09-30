define(["entities/entity"], function(Entity) {
   
   var projectile = function(name, graphic, input, physic, destroy) {
        
        Entity.call(this, name, graphic, input, physic, destroy);
        this.owner = null;
        
   };
   
   projectile.prototype = Object.create(Entity.prototype);
   var _super_ = Entity.prototype;
   
   return projectile;
    
});