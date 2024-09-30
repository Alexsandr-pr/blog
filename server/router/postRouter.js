const Router = require("express");
const PostController = require("../controllers/PostController");

const router = new Router();


router.post("/", PostController.create)
router.get("/all", PostController.getAll)
router.get("/one/:id", PostController.get)
router.get("/search", PostController.search);
module.exports = router;