entity:
    var x,y,velocity,pattern;
    function ctor(components)
    function update(context,elapsed) {}
component:
    input:
        function update(entity)
    pattern:
        function init(pattern)
        function update(entity,context)
    font:
        function init(text)
        function update(context, x, y)
    collision:
        function update(entity, entities
systems:
    