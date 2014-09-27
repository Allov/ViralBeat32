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
        
        var playerShipFactory = new PlayerShipFactory();
        var mainShip = playerShipFactory.spawn(0, 0);
        
        var ennemyShipFactory = new EnnemyShipFactory();
        var ennemy = ennemyShipFactory.spawn(127, 36);

                                
        var text = new Text(new TextPattern(new FontPatternProvider()),
                            "stage", 1, 12, "#fff");

        v.add(new Starfield({ size: 4, starCount: 150}));
        v.add(mainShip);
        v.add(ennemy);
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
