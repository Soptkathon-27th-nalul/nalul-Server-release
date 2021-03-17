const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname+'/../config/s3.json');
const s3 = new aws.S3();
var path = require('path')

const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'nalul',
        acl: 'public-read',
        key: function (req, file, cb) {
            var ext = path.extname(file.originalname);
                cb(null, 'images/origin/' + Date.now() + '.' + file.originalname.split('.').pop());
        }

    })
});


module.exports=upload;