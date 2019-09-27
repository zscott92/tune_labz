const router = require("express").Router();
const profileController = require("../../controllers/userController");
const songsController = require("../../controllers/songsController");

//matches with api/user/:userid/
router.route("/:id")
  .get(songsController.findAll)
  .post(songsController.create);

  
//matches with api/user/:id
router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  .delete(profileController.remove);

module.exports = router;
