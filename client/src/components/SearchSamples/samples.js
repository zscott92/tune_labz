//grateful for the good people over at freesound!!

const { freesound } = require("../../../../routes/filesAPI/samplesApi");

let fields = 'id,name,url';
    freesound.getSound(searchInput,
        function (search) {
            let msg = "";
            msg = "<h3>SoundName: " + search.name + "</h3>";
            msg += "<strong>Url:</strong> " + search.url + "<br>";
            msg += "<strong>Description:</strong> " + search.description + "<br>";
            msg += "<strong>Tags:</strong><ul>";
            for (i in search.tags) {
                msg += "<li>" + search.tags[i] + "</li>";
            }
            msg += "</ul><br>";
            msg += "<img src='" + sound.images.waveform_l + "'>";
            sampleTrack = new Audio(sound.previews['preview-hq-mp3']);
            msg += '<br><button onclick="sampleTrack.play()">play</button><button onclick="sampleTrack.pause()">pause</button><br><br>';
            displayMessage(msg);
            sound.getAnalysis(null, function (analysis) {
                msg += "<strong>Mfccs:</strong><ul>";
                for (i in analysis.lowlevel.mfcc.mean) {
                    msg += "<li>" + analysis.lowlevel.mfcc.mean[i] + "</li>"
                }
                msg += "</ul>";
                displayMessage(msg, 'resp1')
                //ask for similar sounds
                sound.getSimilar(function (sounds) {
                    msg += "<strong>Similar sounds:</strong><ul>";
                            
                    for (i = 0; i <= 10; i++) {
                        var snd = sounds.getSound(i);
                        msg += "<li>" + snd.id + ": " + snd.url + "</li>"
                    }
                    msg += "</ul>";
                    displayMessage(msg, 'resp1')
                }, function () { displayError("Similar sounds could not be retrieved.") },
                    { fields: fields });
            }, function () { displayError("Analysis could not be retrieved.") },
                true);
        })