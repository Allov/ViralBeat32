define(["virality",
        "entities/projectile",
        "entities/boundingbox",
        "components/ship/projectilepatternprovider",
        "components/ship/plasmaweaponinput",
        "components/ship/projectilephysic"],
    function(v, Projectile, BoundingBox, ProjectilePatternProvider, PlasmaWeaponInput, ProjectilePhysic) {
   
    var weapon = function(sound) {
       
        var plasmaId = 0;
       
        this.shoot = function(entity) {

            plasmaId++;

            var projectile = new Projectile(entity.name + "-plasma-" + plasmaId,
                                            new ProjectilePatternProvider(4),
                                            new PlasmaWeaponInput(),
                                            new ProjectilePhysic({w: 128, h: 72}));
            
            projectile.systems.push("physic");
            projectile.systems.push("projectile");
            
            projectile.position.x = entity.position.x + (entity.dimensions.w / 2);
            projectile.position.y = entity.position.y + (entity.dimensions.h / 2);
            projectile.direction.x = 1; // TODO: Change for owner entity's facing direction.
            projectile.dimensions.w = projectile.dimensions.h = 1;
            projectile.speed = 2;
            projectile.owner = entity;

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