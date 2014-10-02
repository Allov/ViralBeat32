define(["components/graphics/patternbuffer"], function(PatternBuffer) {

    var pattern = function(fontPatternProvider) {
        var self = this;

        var patterns = [];

        var textCanvas = document.createElement("canvas");
        var textContext = textCanvas.getContext("2d");

        var _size;

        self.init = function(s, size, color) {
            _size = size;
            var characters = fontPatternProvider.patterns();
            for(var c in characters) {
                patterns[c] = new PatternBuffer(characters[c], 16, color);
            }

            textCanvas.width = s.length * _size * 6;
            
            var spacing = 0;
            for(var i = 0; i < s.length; i++) {
                patterns[s.charAt(i)].draw(textContext, spacing, 0);
                spacing += 6;
            }
        }

        self.update = function(entity, context) {
            context.drawImage(textCanvas, entity.position.x * _size, entity.position.y * _size);
        }
    }

    return pattern;

});