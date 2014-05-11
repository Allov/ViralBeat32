define(["virality"], function(v) {
    var lastUpdate = Date.now();

    v.add({
        name: "heartbeat",
        visible: true,
        update: function(elapsed) {
            var current = Date.now();
            
            if (current - lastUpdate > 1000) {
                lastUpdate = current;
                console.log("I'm well alive!");
            }
        }
    });
});