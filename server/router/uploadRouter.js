const Router = require('express');
const multer = require('multer');
const UploadController = require('../controllers/UploadController');

const router = new Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), UploadController.create);

module.exports = router;