define(["virality",
        "entities/fpscounter",
        "game/stage"],
    function(v, FpsCounter, Stage) {
    
        // Starting Virality.
        v.config({ debug: false })
         .init(512, 288, "game-area")
         .background("#000")
         .start();
        
        v.add(new Stage());
        v.add(new FpsCounter());

        //var song = v.load("chip2.ogg");
        //song.play();
        
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
