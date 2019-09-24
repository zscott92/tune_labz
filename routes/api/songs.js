
const router = require("express").Router();
const songsController = require("../../controllers/songsController");

router.route("/")
  .get(songsController.findAll)
  .post(songsController.create);


router
  .route("/:id")
  .get(songsController.findById)
  .put(songsController.update)
  .delete(songsController.remove);

module.exports = router;
