const router = require("express").Router();
// const bookRoutes = require("./books");

// Book routes
// router.use("/books", bookRoutes);

const songRoutes = require("./songs");
// const fileRoutes = require("../filesAPI/normalizeFileData");

// Song routes
router.use("./songs", songRoutes);
// router.use("./apifiles", fileRoutes);


module.exports = router;
