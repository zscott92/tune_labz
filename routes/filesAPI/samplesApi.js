/* freesound API documentation, slightly modified...
all credit goes to artists and their amazing skillz*/
const freesound = require("freesound");
const router = require("express").Router();
const redirect_path = "www.freesound.org";
let code = "";

  var authHeader = 'https://freesound.org/apiv2/oauth2/authorize/';
            var clientId = 'vsj2MsgZOIL39ggebeKl';
            var clientSecret = 'hOovjhWMcGmK991RWwJL0CadgDvP2jivqoBJoesn';
            var host = 'freesound.org';
            let token = "";

router.get("https://freesound.org/apiv2/oauth2/authorize/?client_id="+clientId+"&response_type=code", function(res, req) {
    res.json(token);
});

router.get("/redirect", function(token, error, redirect_path) {
    if(token == "") {
        console.log(error);
        window.location.replace(original_path);
    }
}

router.use('https://freesound.org/apiv2/oauth2/access_token/', function(res, req)) {
   res.send( 'client_id'=+clientId+'&client_secret='+clientSecret+'&grant_type=authorization_code&code='+token);
        var fields = 'id,name,url';
        freesound.getSound(96541,
                function(sound){
                    var msg = "";
                    msg = "<h3>Getting info of sound: " + sound.name + "</h3>";
                    msg += "<strong>Url:</strong> " + sound.url + "<br>";
                    msg += "<strong>Description:</strong> " + sound.description + "<br>";
                    msg += "<strong>Tags:</strong><ul>";
                    for (i in sound.tags){
                        msg += "<li>" + sound.tags[i] + "</li>";
                    }
                    msg += "</ul><br>";
                    msg += "<img src='" + sound.images.waveform_l + "'>";
                    snd = new Audio(sound.previews['preview-hq-mp3']);
                    msg += '<br><button onclick="snd.play()">play</button><button onclick="snd.pause()">pause</button><br><br>';
                    displayMessage(msg,'resp1');                    
                    // When we have printed some sound info, ask for analysis
                    sound.getAnalysis(null,function(analysis){
                        msg += "<strong>Mfccs:</strong><ul>";
                        for (i in analysis.lowlevel.mfcc.mean){
                            msg += "<li>" + analysis.lowlevel.mfcc.mean[i] + "</li>"
                        }
                        msg += "</ul>";
                        displayMessage(msg,'resp1')
                        // When we have printed the analysis, ask for similar sounds
                        sound.getSimilar(function(sounds){
                            msg += "<strong>Similar sounds:</strong><ul>";
                            
                            for (i =0;i<=10;i++){                                
                                var snd = sounds.getSound(i);
                                msg += "<li>" + snd.id + ": " + snd.url + "</li>"
                            }
                            msg += "</ul>";
                            displayMessage(msg,'resp1')
                        }, function(){ displayError("Similar sounds could not be retrieved.")},
                        {fields:fields});
                    }, function(){ displayError("Analysis could not be retrieved.")},
                    true);// showAll
                    }
        );