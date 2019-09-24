const router = require("express").Router();
const songRoutes = require("./songs");
const userRoutes = require("./user")

router.use("/songs", songRoutes);
router.use("/user". userRoutes);

// const fileRoutes = require("../filesAPI/normalizeFileData");
// router.use("./apifiles", fileRoutes);

module.exports = router;
