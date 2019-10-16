export default {
    getSong = (song) => {
        var options = {
            "method": "GET",
            "hostname": "freesound.org",
            "port": null,
            "path": song,
            "headers": {
                "cookie": "csrftoken=9TEHZyFMVUxu7RHe3iz5QqO55lWeAwZWpvEkPPzN2ntEowSKj5GyTt7Zuorrpgu5",
                "content-length": "0",
                "authorization": "Bearer kV4FUseyDaUsmYBqfdRP0DKFBVKeHh"
            }
        }
    
        let search = searchInput;
        let songID = "/apiv2/search/text/?query=" + search;
        let song = getSong(songID);
        let query = "/apiv2/sounds/" + jsonPath(song, "$..id").toJSONString();
        let analysis = analysis(query);
        Axios.get('/api/search').then(function (response) {
            return (console.log("success"))
        })
    }
}
