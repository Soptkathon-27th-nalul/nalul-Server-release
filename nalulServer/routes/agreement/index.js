const express = require('express');
const router = express.Router();
const authUtils = require('../../middlewares/authUtils')

const userController = require('../../controller/userController')

/* 사용자 로그인 */
router.put('/', authUtils.checkToken, userController.agreement);

module.exports = router;