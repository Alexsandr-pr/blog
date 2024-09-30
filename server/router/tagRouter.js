const Router = require("express");
const TagController = require("../controllers/TagController");

const router = new Router();


router.post("/", TagController.create);
router.get("/", TagController.getAll);
router.get("/:id", TagController.get);

module.exports = router;