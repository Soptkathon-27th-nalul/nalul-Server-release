const express = require('express');
const router = express.Router();
const authUtils = require('../../middlewares/authUtils')
const upload = require('../../modules/multer');

const albumController = require('../../controller/albumController')

router.get('/:category', authUtils.checkToken, albumController.album);
router.delete('/:PostIdx', authUtils.checkToken, albumController.deletePost);
module.exports = router;