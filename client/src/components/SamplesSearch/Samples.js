//grateful for the good people over at freesound!!

var query = "violoncello";
var sort = "rating_desc";

freesound.textSearch(query, { page: page, filter: filter, sort: sort, fields: fields },
    function (sounds) {
        var msg = ""
    
        msg = "<h3>Searching for: " + query + "</h3>"
        msg += "With filter: " + filter + " and sorting: " + sort + "<br>"
        msg += "Num results: " + sounds.count + "<br><ul>"
        for (i = 0; i <= 10; i++) {
            var snd = sounds.getSound(i);
            msg += "<li>" + snd.name + " by " + snd.username + "</li>"
        }
        msg += "</ul>"
        displayMessage(msg, "resp2")
    }, function () { displayError("Error while searching...") }
);