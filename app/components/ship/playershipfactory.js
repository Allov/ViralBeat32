define(["virality",
        "entities/ship",
        "entities/boundingbox",
        "components/movingpattern",
        "components/ship/keyboardinput",
        "components/ship/playerpatternprovider",
        "components/ship/shipphysic",
        "components/ship/plasmaweapon"],
    function(v, Ship, BoundingBox, MovingPattern, KeyboardInput, ShipPatternProvider, ShipPhysic, PlasmaWeapon) {
            
    var factory = function() {
        var self = this;
        
        this.spawn = function(x, y) {
            var ship = new Ship(new MovingPattern(new ShipPatternProvider(4)),
                                    KeyboardInput,
                                    new ShipPhysic({w: 128, h: 72}),
                                    new PlasmaWeapon());
            ship.visible = false;
            ship.name = "player1";
            
            var boundingbox = new BoundingBox(ship, "#0f0");
            boundingbox.name = ship.name + "-bounding-box";
            v.add(boundingbox);
            return ship;
        }
    }
    
    return factory;
});