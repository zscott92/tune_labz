const router = require("express").Router();
const userController = require("../../controllers/userController");
const songsController = require("../../controllers/songsController");

//matches with api/user/:userid/songs 
router.route("/:id/songs")
  .get(songsController.findAll)
  .post(songsController.create);

  
//matches with api/user/:id
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
