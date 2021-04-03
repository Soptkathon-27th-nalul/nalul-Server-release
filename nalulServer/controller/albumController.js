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
    album: async (req, res) => {

        const {
            UserIdx
        } = req.decoded
        const category = req.params.category;

        try {
            const post = await Post.findAll({
                where: {
                    UserIdx,
                },
                attributes: ['PostIdx', 'photo', 'text','createdAt'],
                include: 
                    {
                        model: Question,
                        where: {
                            category
                        },
                        attributes: ['text']
                    }

            });

            const format1 = 'YYYY.MM.DD';

            post.map((item, index) => {
                item.dataValues.createdAt = moment(item.dataValues.createdAt).format(format1)
                item.dataValues.Question = item.dataValues.Question.text
            })

            return res.status(sc.OK).send(ut.success(sc.OK, "성공", post));
        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
        }
    },
    deletePost: async (req, res) => {

        const {
            UserIdx
        } = req.decoded
        const PostIdx = req.params.PostIdx;

        try {
            const post = await Post.findOne({
                where: {
                    UserIdx,
                    PostIdx,
                }

            });

            await post.destroy();

            return res.status(sc.OK).send(ut.success(sc.OK, "삭제 성공"));
        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
        }
    }
}