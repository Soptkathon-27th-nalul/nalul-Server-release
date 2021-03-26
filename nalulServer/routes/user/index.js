const express = require('express');
const router = express.Router();

const userController = require('../../controller/userController')

/* 사용자 로그인 */
router.post('/', userController.login);

module.exports = router;