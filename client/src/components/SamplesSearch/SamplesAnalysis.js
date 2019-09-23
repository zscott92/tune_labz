
class SampleSongAnalysis {
    function() {
        freesound.setToken(process.env.FREESOUND_CLIENT_ID);

        var fields = 'id,name,url';
        freesound.getSound(96541,
            function (sound) {
                var msg = "";
                msg = "<h3>Getting info of sound: " + sound.name + "</h3>";
                msg += "<strong>Url:</strong> " + sound.url + "<br>";
                msg += "<strong>Description:</strong> " + sound.description + "<br>";
                msg += "<strong>Tags:</strong><ul>";
                for (i in sound.tags) {
                    msg += "<li>" + sound.tags[i] + "</li>";
                }
                msg += "</ul><br>";
                msg += "<img src='" + sound.images.waveform_l + "'>";
                snd = new Audio(sound.previews['preview-hq-mp3']);
                msg += '<br><button onclick="snd.play()">play</button><button onclick="snd.pause()">pause</button><br><br>';
                displayMessage(msg, 'resp1');
                sound.getAnalysis(null, function (analysis) {
                    msg += "<strong>Mfccs:</strong><ul>";
                    for (i in analysis.lowlevel.mfcc.mean) {
                        msg += "<li>" + analysis.lowlevel.mfcc.mean[i] + "</li>"
                    }
                    msg += "</ul>";
                    displayMessage(msg, 'resp1')
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
                    true);// showAll
            }, function () { displayError("Sound could not be retrieved.") }
        );
    }
}