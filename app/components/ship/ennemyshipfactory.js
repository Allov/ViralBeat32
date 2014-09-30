define(["virality",
        "entities/ship",
        "entities/boundingbox",
        "components/movingpattern",
        "components/ship/ennemypatternprovider",
        "components/ship/ennemyaiinput",
        "components/ship/shipphysic",
        "components/ship/plasmaweapon",
        "components/ship/defaultshipsound"],
    function(v, Ship, BoundingBox, MovingPattern, EnnemyPatternProvider, EnnemyAiInput, ShipPhysic, PlasmaWeapon, DefaultShipSound) {

    var factory = function() {
        var self = this;
        var ennemyId = 0;

        this.spawn = function(x, y) {
            var ennemy = new Ship("ennemy", new MovingPattern(new EnnemyPatternProvider(4, "#f00")),
                                    new EnnemyAiInput(x, y),
                                    new ShipPhysic({w: 128, h: 72}),
                                    null,
                                    new PlasmaWeapon(),
                                    DefaultShipSound);
                                    
            ennemy.dimensions.w = 3;
            ennemy.dimensions.h = 3;
            ennemy.speed = 0.005;
            ennemy.position.x = x;
            ennemy.position.y = y;
            ennemy.direction.x = -1;
            ennemy.direction.y = 0;
            ennemy.visible = true;
            ennemy.name = "ennemy-" + ennemyId;
            ennemyId++;
            
            var boundingbox = new BoundingBox(ennemy, "#f00");
            boundingbox.name = ennemy.name + "-bounding-box";
            
            v.add(ennemy);
            v.add(boundingbox);
            
            return ennemy;
        };
    };

    return factory;
});
