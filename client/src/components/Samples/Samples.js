//grateful for the good people over at freesound!!

const Search = required("../Search");
const freesound = require("freesound");

module.exports = class Samples extends React.Component {
    function() {
        let sampleQuery = Search.state.value;
        freesound.textSearch(sampleQuery);
    }
};

