define(["virality",
        "entities/ship",
        "entities/boundingbox",
        "components/userinput",
        "components/movements/systemphysic",
        "components/weapons/plasmagun",
        "components/ships/movingpattern",
        "components/ships/players/playerpatternprovider",
        "components/ships/defaultshipsound"],
    function(v, Ship, BoundingBox, UserInput, SystemPhysic, PlasmaGun, MovingPattern, PlayerPatternProvider, DefaultShipSound) {
            
    var factory = function() {
        var self = this;
        
        this.spawn = function(x, y) {
            var ship = new Ship("Player 1",
                                new MovingPattern(new PlayerPatternProvider(4)),
                                UserInput,
                                new SystemPhysic({w: 128, h: 72}, "projectile"),
                                null,
                                new PlasmaGun(DefaultShipSound),
                                DefaultShipSound);
                                
            ship.visible = false;
            
            ship.dimensions.w = ship.dimensions.h = 7;
            ship.speed = 0.05;
            ship.position.x = x;
            ship.position.y = y;

            var boundingbox = new BoundingBox(ship, "#0f0");
            boundingbox.name = ship.name + "-bounding-box";
            v.add(ship);
            v.add(boundingbox);
            
            return ship;
        }
    }
    
    return factory;
});