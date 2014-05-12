define(["virality","entities/ship", "components/movingpattern", "components/ship/shipkeyboardinput",
        "components/ship/shippatternprovider", "components/ship/shipphysic", "components/fontpatternprovider", "components/textpattern",
        "entities/text", "components/ennemy/ennemypatternprovider", "components/ennemy/ennemyaiinput"],
    function(v, Ship, MovingPattern, KeyboardInput, ShipPatternProvider, ShipPhysic,
            FontPatternProvider, TextPattern, Text, EnnemyPatternProvider, EnnemyAiInput) {

    var stage = function() {
        var self = this;

        self.name = "Stage";
        self.visible = true;

        var date = Date.now();
        var mainShip = new Ship(new MovingPattern(new ShipPatternProvider()),
                                KeyboardInput,
                                new ShipPhysic({w: 32, h: 32}));
        mainShip.visible = false;
        
        var ennemy = new Ship(new MovingPattern(new EnnemyPatternProvider(16, "#f00")),
                                new EnnemyAiInput(31, 16),
                                new ShipPhysic({w: 32, h: 32}));
        ennemy.speed = 0.005;
        ennemy.position.x = 31;
        ennemy.position.y = 16;
        ennemy.visible = false;
                                
        var text = new Text(new TextPattern(new FontPatternProvider()),
                            "stage", 1, 12, "#fff");

        v.add(mainShip);
        v.add(ennemy);
        v.add(text);

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