const router = require("express").Router();
const {fileUploads, sampleUploads} = require("../filesAPI/normalizeFileData");
const songsController = require("../../../controllers/songsController");

router.route("/fileUploads")
  .get(fileUploads.findAll)
  .post(songsController.create);


router
  .route("/:id")
  .get(songsController.findById)
  .put(songsController.update)
  .delete(songsController.remove);

module.exports = router;