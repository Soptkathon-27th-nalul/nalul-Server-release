const express = require('express');
const router = express.Router();
const authUtils = require('../../middlewares/authUtils')
const upload = require('../../modules/multer');

const postController = require('../../controller/postController')

router.post('/:QuestionIdx', authUtils.checkToken, upload.single('image'), postController.posting);
router.get('/:category', authUtils.checkToken, postController.getQuestion);

module.exports = router;