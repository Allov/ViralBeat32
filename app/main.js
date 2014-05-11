define(["virality", "entities/heartbeat", "entities/fpscounter", "entities/starfield", "entities/stage"],
    function(v, h, FpsCounter, Starfield, Stage) {
    
        // Starting Virality.
        v.config({ debug: true })
         .init(480, 480)
         .background("#000")
         .start();
        
        //v.components(new Starfield({ size: 16, starCount: 50}));
        //v.components(new Stage());
        
        v.add(new Stage());
        v.add(new FpsCounter());
        var pauseSound = v.load("pause.wav");
         
        // Handles pause and unpause.
        document.getElementById("pause")
                .onclick = function() {
                    v.pause();
                    if (v.isPaused()) {
                        pauseSound.play();
                        this.innerHTML = "Unpaused";
                    } else {
                        this.innerHTML = "Pause";
                    }
                };

        document.getElementById("mute")
                .onclick = function() {
                    v.mute();
                };

        document.getElementById("unmute")
                .onclick = function() {
                    v.unmute();
                };
    });