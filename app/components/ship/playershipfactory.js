define(["virality",
        "entities/ship",
        "entities/boundingbox",
        "components/movingpattern",
        "components/ship/keyboardinput",
        "components/ship/playerpatternprovider",
        "components/ship/shipphysic",
        "components/ship/plasmaweapon",
        "components/ship/defaultshipsound"],
    function(v, Ship, BoundingBox, MovingPattern, KeyboardInput, ShipPatternProvider, ShipPhysic, PlasmaWeapon, DefaultShipSound) {
            
    var factory = function() {
        var self = this;
        
        this.spawn = function(x, y) {
            var ship = new Ship("Player 1",
                                new MovingPattern(new ShipPatternProvider(4)),
                                KeyboardInput,
                                new ShipPhysic({w: 128, h: 72}),
                                null,
                                new PlasmaWeapon(DefaultShipSound),
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