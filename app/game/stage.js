define(["virality",
        "components/fontpatternprovider",
        "components/textpattern",
        "entities/text",
        "entities/starfield",
        "components/ship/playershipfactory",
        "components/ship/ennemyshipfactory"],
    function(v, FontPatternProvider, TextPattern, Text, Starfield, PlayerShipFactory, EnnemyShipFactory) {

    var stage = function() {
        var self = this;

        self.name = "Stage";
        self.visible = true;

        var date = Date.now();
        
        v.add(new Starfield({ size: 4, starCount: 150}));

        var playerShipFactory = new PlayerShipFactory();
        var mainShip = playerShipFactory.spawn(0, 0);
        v.add(mainShip);
        
        var ennemyShipFactory = new EnnemyShipFactory();
        
        for(var i = 0; i < 10; i++) {
            var ennemy = ennemyShipFactory.spawn(127, 10+i*5);
            v.add(ennemy);
        }

                                
        var text = new Text(new TextPattern(new FontPatternProvider()),
                            "stage", 1, 12, "#fff");
        //v.add(text);

        self.update = function() {
            var current = Date.now();

            if (current - date > 2000) {
                mainShip.visible = true;
                ennemy.visible = true;
            }
        }
    }

    return stage;

});
