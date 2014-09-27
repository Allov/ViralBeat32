define(["entities/ship",
        "components/movingpattern",
        "components/ship/keyboardinput",
        "components/ship/playerpatternprovider",
        "components/ship/shipphysic"],
    function(Ship, MovingPattern, KeyboardInput, ShipPatternProvider, ShipPhysic) {
            
    var factory = function() {
        var self = this;
        
        this.spawn = function(x, y) {
            var ship = new Ship(new MovingPattern(new ShipPatternProvider(4)),
                                    KeyboardInput,
                                    new ShipPhysic({w: 128, h: 72}));
            ship.visible = false;
            return ship;
        }
    }
    
    return factory;
});