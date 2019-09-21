const router = require("express").Router();
const userRoutes = require("./user");

// Song routes
router.use("/user", userRoutes);

module.exports = router;
