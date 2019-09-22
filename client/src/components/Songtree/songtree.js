const {GetTree} = require("patternfly-bootstrap-treeview");
const API = require("../utils/API");
const visualizer = require("../TrackVisualizer")
const files = require("../../../../routes/filesApi/normalizeFileTypes");

export class GetTree {
  function() {
    return (
      this.state.files.map((song, key) =>
        song.id = {
          key: song.id,
          name: song.name,
          owner: song.owner,
          collaborators: song.collaborators,
          userImage: song.userImage,
          visualization: song.visualization,
          versions: [song.id]
        }
      ))
  };
};

$('#tree').treeview({ data: getTree() });