const router = require("express").Router();
<<<<<<< HEAD
const songRoutes = require("./songs");
const userRoutes = require("./user")
=======
// const bookRoutes = require("./books");
>>>>>>> 14de227b8b27c997b6719e506f0ce1ac2b1ef41f

router.use("/songs", songRoutes);
router.use("/user". userRoutes);

// const fileRoutes = require("../filesAPI/normalizeFileData");
// router.use("./apifiles", fileRoutes);

module.exports = router;
