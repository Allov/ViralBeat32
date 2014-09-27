define(["entities/ship",
        "components/movingpattern",
        "components/ship/ennemypatternprovider",
        "components/ship/ennemyaiinput",
        "components/ship/shipphysic"],
    function(Ship, MovingPattern, EnnemyPatternProvider, EnnemyAiInput, ShipPhysic) {

    var factory = function() {
        var self = this;

        this.spawn = function(x, y) {
            var ennemy = new Ship(new MovingPattern(new EnnemyPatternProvider(4, "#f00")),
                                    new EnnemyAiInput(x, y),
                                    new ShipPhysic({w: 128, h: 72}));
            ennemy.speed = 0.005;
            ennemy.position.x = x;
            ennemy.position.y = y;
            ennemy.visible = true;
            
            return ennemy;
        };
    };

    return factory;
});
