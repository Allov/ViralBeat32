define(["virality","entities/ship", "components/ship/shipmover", "components/movingpattern", "components/ship/shipkeyboardinput", 
        "components/ship/shippatternprovider", "components/ship/shipphysic", "components/fontpatternprovider", "components/textpattern",
        "entities/text"],
    function(v, Ship, ShipMover, MovingPattern, KeyboardInput, ShipPatternProvider, ShipPhysic, FontPatternProvider, TextPattern, Text) {

    var stage = function() {
        var self = this;

        self.name = "Stage";
        self.visible = true;

        var date = Date.now();
        var mainShip = new Ship(new MovingPattern(new ShipPatternProvider()), 
                                KeyboardInput, 
                                new ShipMover(), 
                                new ShipPhysic({w: 32, h: 32}));
        mainShip.visible = false;

        var text = new Text(new TextPattern(new FontPatternProvider()), 
                            "stage", 1, 12, "#fff");

        v.add(mainShip);
        v.add(text);

        self.update = function() {
            var current = Date.now();

            if (current - date > 2000) {
                mainShip.visible = true;
            }
        }
    }

    return stage;

});