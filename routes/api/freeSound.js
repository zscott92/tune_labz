
const http = require("https");
module.exports = app.get("/api/freesound/:options", http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
    req.end();
}));


let query = "/apiv2/sounds/" + jsonPath(song, "$..id").toJSONString();
let analysis = analysis(query);
var req = app.get("/api/freesound/:analysis", http.request(analysis, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
    req.end();
}));