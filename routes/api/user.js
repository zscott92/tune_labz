const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const songsController = require("../../controllers/songsController");

//matches with api/user/:userid/songs 
router.route("/:id/songs")
  .get(songsController.findAll)
  .post(songsController.create);

  
//matches with api/user/:id
router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  .delete(profileController.remove);

module.exports = router;
