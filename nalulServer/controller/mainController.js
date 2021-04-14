const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
var moment = require('moment')
const {
    User,
    Post,
    Question
} = require('../models');

module.exports = {
    getPhotos: async (req, res) => {

        const {
            UserIdx
        } = req.decoded

        try {
            const random1 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 1
                },
                attributes: ['photo'],
            });


            const random2 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 2
                },
                attributes: ['photo'],
            });
            const random3 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 3
                },
                attributes: ['photo'],
            });
            const random4 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 4
                },
                attributes: ['photo'],
            });
            const random5 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 5
                },
                attributes: ['photo'],
            });
            const random6 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 6
                },
                attributes: ['photo'],
            });
            const random7 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 7
                },
                attributes: ['photo'],
            });
            const random8 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 8
                },
                attributes: ['photo'],
            });
            const random9 = await Post.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    UserIdx,
                    category: 9
                },
                attributes: ['photo'],
            })
            try {
                ran1 = random1.dataValues.photo
            } catch {
                ran1 = ""
            }
            try {
                ran2 = random2.dataValues.photo
            } catch {
                ran2 = ""
            }
            try {
                ran3 = random3.dataValues.photo
            } catch {
                ran3 = ""
            }
            try {
                ran4 = random4.dataValues.photo
            } catch {
                ran4 = ""
            }
            try {
                ran5 = random5.dataValues.photo
            } catch {
                ran5 = ""
            }
            try {
                ran6 = random6.dataValues.photo
            } catch {
                ran6 = ""
            }
            try {
                ran7 = random7.dataValues.photo
            } catch {
                ran7 = ""
            }
            try {
                ran8 = random8.dataValues.photo
            } catch {
                ran8 = ""
            }
            try {
                ran9 = random9.dataValues.photo
            } catch {
                ran9 = ""
            }
            const randoms = {
                random1: ran1,
                random2: ran2,
                random3: ran3,
                random4: ran4,
                random5: ran5,
                random6: ran6,
                random7: ran7,
                random8: ran8,
                random9: ran9,
            }
            if(ran1 == "" && ran2 == "" && ran3 == ""&& ran4 == ""&& ran5 == ""&& ran6 == ""&& ran7 == ""&& ran8 == ""&& ran9 == ""){
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, "사진이 없습니다."));
            }else{
                return res.status(sc.OK).send(ut.success(sc.OK, "성공", randoms));
            }
            
        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
        }
    }
}