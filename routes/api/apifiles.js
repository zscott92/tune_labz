const router = require("express").Router();
const {fileUploads, sampleUploads} = require("../filesAPI/normalizeFileData");
const songsController = require("../../../controllers/songsController");

<Route exact path="/fileUploads/:id" component={EditTodo} />;


router
  .route("/:id")
  .get(songsController.findById)
  .put(songsController.update)
  .delete(songsController.remove);

module.exports = router;

