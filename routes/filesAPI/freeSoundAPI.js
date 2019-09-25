// import Axios from "axios";

// /* freesound API documentation, slightly modified...
// all credit goes to the talented artists that produced and created their artists*/
// var http = require("https");
// const { searchInput } = require("../../client/public/src/components/Search");
// console.log(search);
// export default {
//     getSong = (song) => {
//         var options = {
//             "method": "GET",
//             "hostname": "freesound.org",
//             "port": null,
//             "path": song,
//             "headers": {
//                 "cookie": "csrftoken=9TEHZyFMVUxu7RHe3iz5QqO55lWeAwZWpvEkPPzN2ntEowSKj5GyTt7Zuorrpgu5",
//                 "content-length": "0",
//                 "authorization": "Bearer kV4FUseyDaUsmYBqfdRP0DKFBVKeHh"
//             }
//         }
//         let search = searchInput;
//         let songID = "/apiv2/search/text/?query=" + search;
//         Axios.get('/search').then(function (response) {
//             return (console.log("success"))
//         }
//     }

//     song = getSong(songID)


//     var req = http.request(options, function (res) {
//             var chunks = [];

//             res.on("data", function (chunk) {
//                 chunks.push(chunk);
//             });

//             res.on("end", function () {
//                 var body = Buffer.concat(chunks);
//                 console.log(body.toString());
//             });
//         });
//         var http = require("https");
//         function analysis() {
//             var analysis = {
//                 "method": "GET",
//                 "hostname": "freesound.org",
//                 "port": null,
//                 "path": query,
//                 "headers": {
//                     "cookie": "csrftoken=9TEHZyFMVUxu7RHe3iz5QqO55lWeAwZWpvEkPPzN2ntEowSKj5GyTt7Zuorrpgu5",
//                     "content-length": "0",
//                     "authorization": "Bearer KvwVi6Nb5DjGBJOSxVOHh6fcI9yws0"
//                 }
//             };
//             return analysis;
//         }
//         let query = "/apiv2/sounds/" + jsonPath(song, "$..id").toJSONString();
//         let analysis = analysis(query);
//         var req = http.request(analysis, function (res) {
//             var chunks = [];

//             res.on("data", function (chunk) {
//                 chunks.push(chunk);
//             });

//             res.on("end", function () {
//                 var body = Buffer.concat(chunks);
//                 console.log(body.toString());
//             });
//         });

//         req.end();
//     }