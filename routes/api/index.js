const router = require("express").Router();

// const bookRoutes = require("./books");

// Book routes
// router.use("/books", bookRoutes);

const songRoutes = require("./songs");

// Song routes
router.use("/songs", songRoutes);


module.exports = router;
