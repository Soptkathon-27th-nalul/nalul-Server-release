const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const jwt = require('../modules/jwt')
const {
    User
} = require('../models');

module.exports = {
    login: async (req, res) => {
        let user = null;
        let isMember = 1;
        const {
            uuid
        } = req.body;
        try {
            user = await User.findOne({
                where: {
                    uuid
                }
            })
            if (!user) {
                user = await User.create({
                    uuid
                })
                isMember = 0
            }
            const {
                accessToken,
                refreshToken
            } = await jwt.sign(user);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.SIGN_IN_SUCCESS, {
                isMember,
                accessToken,
                refreshToken
            }))
        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.SIGN_IN_FAIL));
        }
    },
    agreement: async (req, res) => {
        const {UserIdx} = req.decoded
        try {
            user = await User.findOne({
                where: {
                    UserIdx
                }
            })
            result = await User.update({
                agreement:1,
            },{
                where:{
                UserIdx
            }})
            return res.status(sc.OK).send(ut.success(sc.OK, "약관 동의 성공"))
        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, "약관 동의 실패"));
        }

    }
}