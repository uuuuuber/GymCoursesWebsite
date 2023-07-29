const express = require('express');
const router = express.Router();
const expressJoi=require('@escook/express-joi')
const orderController=require('../controllers/orderController')



// 查询订单接口
router.get(
    '/findOrder', 
    orderController.orderList
    );

// // 报名接口
router.get(
    '/baoming', 
    orderController.baoming
    );

module.exports=router