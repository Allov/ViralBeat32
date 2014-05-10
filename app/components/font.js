define(["components/pattern"], function(Pattern) {
    var characters = {
        a: [
        "xxxx ",
        "    x",
        " xxxx",
        "x   x",
        " xxxx",
        ],
        b: [
        "x    ",
        "xxxx ",
        "x   x",
        "x   x",
        "xxxx ",
        ],
        c: [
        " xxx ",
        "x   x",
        "x    ",
        "x   x",
        " xxx ",
        ],
        d: [
        "    x",
        " xxxx",
        "x   x",
        "x   x",
        " xxxx",
        ], 
        e: [
        " xxx ",
        "x   x",
        "xxxxx",
        "x    ",
        " xxxx",
        ],
        f: [
        " xxx ",
        "x   x",
        "xx   ",
        "x    ",
        "x    ",
        ],
        g: [
        " xxx ",
        "x   x",
        " xxxx",
        "    x",
        "xxxx ",
        ],
        h: [
        "x    ",
        "xxxx ",
        "x   x",
        "x   x",
        "x   x",
        ],
        i: [
        "  x  ",
        "     ",
        " xx  ",
        "  x  ",
        "  x  ",
        ],
        j: [
        "    x",
        "    x",
        "    x",
        "    x",
        "xxxx ",
        ],

        k: [
        "x   x",
        "x  x ",
        "xxx  ",
        "x  x ",
        "x   x",
        ],
        l: [
        "x    ",
        "x    ",
        "x    ",
        "x    ",
        " xxxx",
        ],
        m: [
        " x x ",
        "x x x",
        "x x x",
        "x x x",
        "x x x",
        ],
        n: [
        "xxxx ",
        "x   x",
        "x   x",
        "x   x",
        "x   x",
        ],
        o: [
        " xxx ",
        "x   x",
        "x   x",
        "x   x",
        " xxx ",
        ],

        p: [
        "xxxx ",
        "x   x",
        "x   x",
        "xxxx ",
        "x    ",
        ],
        q: [
        " xxx ",
        "x   x",
        "x   x",
        " xxxx",
        "    x",
        ],
        r: [
        "x xx ",
        "xx  x",
        "x    ",
        "x    ",
        "x    ",
        ],
        "s": [
        " xxxx",
        "x    ",
        " xxx ",
        "    x",
        "xxxx ",
        ],
        t: [
        "x    ",
        "xxx  ",
        "x    ",
        "x   x",
        " xxx ",
        ],
        u: [
        "x    ",
        "x   x",
        "x   x",
        "x  xx",
        " xx x",
        ],
        v: [
        "x   x",
        "x   x",
        " x x ",
        " x x ",
        "  x  ",
        ],
        w: [
        "x x x",
        "x x x",
        "x x x",
        "x x x",
        " x x ",
        ],
        x: [
        "x   x",
        "x   x",
        " xxx ",
        "x   x",
        "x   x",
        ],
        y: [
        "x   x",
        "x   x",
        " xxxx",
        "    x",
        "xxxx ",
        ],
        z: [
        " xxxx",
        "   x ",
        "  x  ",
        " x   ",
        "xxxxx",
        ],
        "1": [
        "  x  ",
        " xx  ",
        "  x  ",
        "  x  ",
        " xxx ",
        ],
        "2": [
        "xxxx ",
        "    x",
        " xxx ",
        "x    ",
        " xxxx",
        ],
        "3": [
        "xxxx ",
        "    x",
        "  xx ",
        "    x",
        "xxxx ",
        ],
        "4": [
        "x   x",
        "x   x",
        " xxxx",
        "    x",
        "    x",
        ],
        "5": [
        "xxxxx",
        "x    ",
        "xxxx ",
        "    x",
        "xxxx ",
        ],
        "6": [
        " xxxx",
        "x    ",
        "xxxx ",
        "x   x",
        " xxx ",
        ],
        "7": [
        "xxxxx",
        "    x",
        "   x ",
        "   x ",
        "   x ",
        ],
        "8": [
        " xxx ",
        "x   x",
        " xxx ",
        "x   x",
        " xxx ",
        ],
        "9": [
        " xxx ",
        "x   x",
        " xxxx",
        "    x",
        "  xx ",
        ],
        "0": [
        " xxx ",
        "x  xx",
        "x x x",
        "xx  x",
        " xxx ",
        ],
        ".": [
        "     ",
        "     ",
        "     ",
        "     ",
        "  x  ",
        ],
        ",": [
        "     ",
        "     ",
        "     ",
        "   x ",
        "  x  ",
        ],
        "!": [
        "   x ",
        "  xxx",
        "   x ",
        "     ",
        "   x ",
        ],
        "?": [
        " xxx ",
        "x   x",
        "  xx ",
        "     ",
        "  x  ",
        ],
        ":": [
        "     ",
        "     ",
        "  x  ",
        "     ",
        "  x  ",
        ],
        "=": [
        "     ",
        " xxx ",
        "     ",
        " xxx ",
        "     ",
        ],
        "+": [
        "     ",
        "  x  ",
        " xxx ",
        "  x  ",
        "     ",
        ],
        "-": [
        "     ",
        "     ",
        " xxx ",
        "     ",
        "     ",
        ],
        "(": [
        "  x  ",
        " x   ",
        " x   ",
        " x   ",
        "  x  ",
        ],
        ")": [
        "  x  ",
        "   x ",
        "   x ",
        "   x ",
        "  x  ",
        ],
        "[": [
        " xxx ",
        " x   ",
        " x   ",
        " x   ",
        " xxx ",
        ],
        "]": [
        " xxx ",
        "   x ",
        "   x ",
        "   x ",
        " xxx ",
        ],
        "/": [
        "    x",
        "   x ",
        "  x  ",
        " x   ",
        "x    ",
        ],
        "$": [
        " xxx ",
        "x x  ",
        " xxx ",
        "  x x",
        " xxx ",
        ],
        "%": [
        "x   x",
        "   x ",
        "  x  ",
        " x   ",
        "x   x",
        ],
        "*": [
        "x x x",
        " xxx ",
        "xxxxx",
        " xxx ",
        "x x x",
        ],
        "<": [
        "   x ",
        "  x  ",
        " x   ",
        "  x  ",
        "   x ",
        ],
        ">": [
        " x   ",
        "  x  ",
        "   x ",
        "  x  ",
        " x   ",
        ],
        "'": [
        "   x ",
        "  x  ",
        "     ",
        "     ",
        "     ",
        ],
        " ": [
        "     ",
        "     ",
        "     ",
        "     ",
        "     ",
        ]
    };

    var font = function(s, size, color) {
        var self = this;
        var patterns = [];

        for(var c in characters) {
            patterns[c] = new Pattern(characters[c], 16, color);
        }

        var textCanvas = document.createElement("canvas");
        textCanvas.width = s.length * size * 6;
        var textContext = textCanvas.getContext("2d");
        
        var spacing = 0;
        for(var i = 0; i < s.length; i++) {
            patterns[s.charAt(i)].setPattern(characters[s.charAt(i)]);
            patterns[s.charAt(i)].draw(textContext, spacing, 0);
            spacing += 6;
        }

        self.draw = function(context, x, y) {
            context.drawImage(textCanvas, x * size, y * size);
        }
    };

    return font;
});