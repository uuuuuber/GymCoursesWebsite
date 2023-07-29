const express = require('express');
const router = express.Router();
const expressJoi=require('@escook/express-joi')
const courseController = require('../controllers/courseController');
const {findCourseCheck,updateCourseCheck,deleteCourseCheck} = require('../utils/userCheck');

// 查询课程接口
router.get(
    '/find', 
    expressJoi(findCourseCheck), 
    courseController.listVideo
    );

router.get(
    '/find2', 
    
    courseController.getVidio
    );


//课程修改接口
router.get(
    '/update',
    expressJoi(updateCourseCheck),
    courseController.updateVideoById
)

// 删除课程接口
router.get(
    '/delete', 
    expressJoi(deleteCourseCheck),
    courseController.deleteVideoById
    );

module.exports=router