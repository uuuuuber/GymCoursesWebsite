const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const expressJoi=require('@escook/express-joi')

const {userCheck}=require('../utils/userCheck')

// //跨域解决
// router.use( function(req, res, next) {

//     res.setHeader("Access-Control-Allow-Origin", "*");

//     res.setHeader('Access-Control-Allow-Methods', "*");

//     res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);

//     next();

// });
/**
 * 用户注册接口
 */
router.post(
    '/register',
    expressJoi(userCheck),
    userController.registerController
    )

/**
 * 管理员注册接口
 */
 router.post(
    '/adminregister',
    expressJoi(userCheck),
    userController.adminregisterController
    )

/**
 * 用户登录接口
 */
 router.post('/login',expressJoi(userCheck),userController.loginController)

 /**
 * 管理员登录接口
 */
  router.post('/adminlogin',userController.adminLoginController)

/**
 * 用户信息查询接口
 */
router.get('/userInfo',userController.userInfoController)

/**
 * 用户信息查询接口
 */
 router.get('/userInfo2',userController.userInfoController2)

module.exports=router