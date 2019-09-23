/* freesound API documentation, slightly modified...
all credit goes to the talented artists that produced and created their artists*/
var http = require("https");
const search = require("../../client/public/src/components/Search");
console.log(search);


module.exports = function getSamples() {

    function getSong() {
        var options = {
            "method": "GET",
            "hostname": "freesound.org",
            "port": null,
            "path": songID,
            "headers": {
                "cookie": "csrftoken=9TEHZyFMVUxu7RHe3iz5QqO55lWeAwZWpvEkPPzN2ntEowSKj5GyTt7Zuorrpgu5",
                "content-length": "0",
                "authorization": "Bearer kV4FUseyDaUsmYBqfdRP0DKFBVKeHh"
            }
        };
        return options;
    }
    let search = "drums";
    let songID = "/apiv2/search/text/?query=" + search;
    let query = getSong(songID);
    let query = "/apiv2/sounds/" + songID;


    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.end();
}