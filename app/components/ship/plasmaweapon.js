define(["virality",
        "entities/projectile",
        "entities/boundingbox",
        "components/ship/projectilepatternprovider",
        "components/ship/plasmaweaponinput",
        "components/ship/projectilephysic"],
    function(v, Projectile, BoundingBox, ProjectilePatternProvider, PlasmaWeaponInput, ProjectilePhysic) {
   
    var weapon = function(sound) {
       
        var self = this;
        var plasmaId = 0;
       
        this.shoot = function(entity) {
            
            var x = entity.position.x + (entity.dimensions.w / 2);
            var y = entity.position.y + (entity.dimensions.h / 2);
            var projectile = new Projectile(x, y, entity.direction.x, entity.direction.y,
                                            new ProjectilePatternProvider(4),
                                            new PlasmaWeaponInput(),
                                            new ProjectilePhysic({w: 128, h: 72}));
            projectile.speed = 2;
            projectile.owner = entity;
            projectile.name = entity.name + "-plasma-" + plasmaId;
            plasmaId++;
            
            var boundingbox = new BoundingBox(projectile, "#0ff");
            boundingbox.name = projectile.name + "-bounding-box";
            v.add(projectile);
            v.add(boundingbox);
            
            sound.shoot();
            
            return projectile;
        }
       
    };
   
    return weapon;
    
});