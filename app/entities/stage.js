define(["virality","entities/ship", "components/shipmover", "components/pattern", "components/keyboardinput", "components/shippatternprovider"],
    function(v, Ship, ShipMover, Pattern, KeyboardInput, ShipPatternProvider) {

    var stage = function() {
        var self = this;
        var mainShip = new Ship(new Pattern(new ShipPatternProvider()), KeyboardInput, new ShipMover());

        self.init = function() {
            v.add(mainShip);
        }

        self.update = function(context, elapsed) {

        }
    }

    return stage;

});