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
                console.log("엥")
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, "회원이 아닙니다."));
            } else {
                const {
                    accessToken,
                    refreshToken
                } = await jwt.sign(user);
                return res.status(sc.OK).send(ut.success(sc.OK, rm.SIGN_IN_SUCCESS, {
                    accessToken,
                    refreshToken
                }))
            }

        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, "로그인 실패"));
        }
    },
    signup: async (req, res) => {
        let user = null;
        const {
            uuid
        } = req.body;
        try {
            user = await User.create({
                uuid
            })

            result = await User.update({
                agreement: 1,
            }, {
                where: {
                    uuid
                }
            })

            const {
                accessToken,
                refreshToken
            } = await jwt.sign(user);
            return res.status(sc.OK).send(ut.success(sc.OK, "약관 동의 및 회원가입 성공", {
                accessToken,
                refreshToken
            }))
        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, "약관 동의 실패"));
        }

    }
}