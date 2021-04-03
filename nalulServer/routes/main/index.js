const express = require('express');
const router = express.Router();
const authUtils = require('../../middlewares/authUtils')
const upload = require('../../modules/multer');

const mainController = require('../../controller/mainController')

router.get('/', authUtils.checkToken, mainController.getPhotos);
module.exports = router;