define(["components/graphics/fontpatternprovider",
		"components/graphics/text"], 
		function(FontPatternProvider, Text) {

	var factory = function() {

		this.create = function(text, x, y, color) {
	        return new Text(new TextPattern(new FontPatternProvider()), text, x, y, color);
		};

	};

	return factory;

});