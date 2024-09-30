const Router = require("express");

const router = new Router();
const postRouter = require("./postRouter");
const uploadRouter = require("./uploadRouter");
const tagRouter = require("./tagRouter");

router.use("/post", postRouter);
router.use("/upload", uploadRouter);
router.use("/tag", tagRouter);

module.exports = router;