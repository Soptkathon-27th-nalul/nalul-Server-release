const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const {
    User,
    Post,
    Question
} = require('../models');

module.exports = {
    posting: async (req, res) => {
        const postFile = req.file.location
        const {UserIdx} = req.decoded
        const QuestionIdx = req.params.QuestionIdx;
        const {postString} = req.body;

        try {
            const user = await User.findOne({
                where: {
                    UserIdx,
                }
            });
            const question = await Question.findOne({
                where:{
                    QuestionIdx
                },
                attribute : ['category']
            })
            

            const post = await Post.create({
                text : postString,
                photo : postFile,
                QuestionIdx,
                category :question.category                
            });


            await user.addPost(post);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_IMAGE_SUCCESS));
        } catch (err) {
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    getQuestion: async (req, res) => {

        const {
            UserIdx
        } = req.decoded
        const category = req.params.category;


        try {
            const random = await Question.findOne({
                order: [
                    [sequelize.literal('RAND()')]
                ],
                limit: 1,
                where: {
                    category: category
                },
                attributes: ['QuestionIdx','text'],
            });

            
            return res.status(sc.OK).send(ut.success(sc.OK, "성공", random));
        } catch (error) {
            console.error(error);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
        }
    },
    
}