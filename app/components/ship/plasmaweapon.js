define(["virality",
        "entities/projectile",
        "components/ship/projectilepatternprovider",
        "components/ship/plasmaweaponinput"],
    function(v, Projectile, ProjectilePatternProvider, PlasmaWeaponInput) {
   
    var weapon = function() {
       
        var self = this;
       
        this.shoot = function(entity) {
            
            var x = entity.position.x + (entity.dimensions.w / 2);
            var y = entity.position.y + (entity.dimensions.h / 2);
            var projectile = new Projectile(x, y, entity.direction.x, entity.direction.y,
                                            new ProjectilePatternProvider(4), new PlasmaWeaponInput());
            projectile.speed = 2;
            
            v.add(projectile);
        }
       
    };
   
    return weapon;
    
});