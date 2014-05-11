define([], function() {
    var entity = function(graphic, s, x, y, c) {
        var self = this;

        var position = {x: x, y: y},
            color = c,
            text = s,
            visible = true;

        self.visible = visible;
        self.position = position;
        self.text = text;
        self.color = c;

        self.init = function() {
            graphic.init(text, 16, color);
        }

        self.update = function(context, elapsed) {
            graphic.update(self, context);
        }
    };

    return entity;
});