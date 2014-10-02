define(["virality",
        "components/graphics/textfactory",
        "entities/starfield",
        "components/ships/players/playershipfactory",
        "components/ships/ennemies/ennemyshipfactory"],
    function(v, TextFactory, Starfield, PlayerShipFactory, EnnemyShipFactory) {

    var stage = function() {
        var self = this;

        self.name = "Stage";
        self.visible = true;

        self.grid = {w: 128, h: 72};

        var date = Date.now();
        
        v.add(new Starfield({ size: 4, starCount: 150}));

        var playerShipFactory = new PlayerShipFactory(self.grid);
        var mainShip = playerShipFactory.spawn(0, 0);

        var ennemyShipFactory = new EnnemyShipFactory(self.grid);
        
        for(var i = 0; i < 10; i++) {
            ennemyShipFactory.spawn(127, 10+i*5);
        }
                                
        self.update = function() {
            var current = Date.now();

            if (current - date > 2000) {
                mainShip.visible = true;
            }
        }
    }

    return stage;

});
