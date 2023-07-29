const express=require('express')
const cors = require('cors')

const app=express()
app.use(cors())



/**
 * 解析post请求的body数据
 */
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


/**
 * 解析token效验是否正确，哪些接口需要token效验,中间件
 */
const expressJwt=require('express-jwt')
const { jwtSecretKey }=require('./config/jwtSecretKey')
app.use(
    expressJwt({secret:jwtSecretKey,algorithms:['HS256']}).unless({
        path:['/api/v1/user/register', '/api/v1/user/login'] 
    }))

/**
 * 管理员相关接口
 */
 const adminRouter=require('./router/user')
 app.use('/api/v1/admin',adminRouter)
    
/**
 * 用户相关接口
 */
const userRouter=require('./router/user')
app.use('/api/v1/user',userRouter)

/**
 * 课程相关接口
 */
 const courseRouter=require('./router/course')
 app.use('/api/v1/course',courseRouter)

/**
 * 订单相关接口
 */
const orderRouter=require('./router/order')
app.use('/api/v1/order',orderRouter)



/**
 * 错误中间件
 */
const joi=require('joi')
app.use((err,req,res,next)=>{
    //joi表单的用户信息效验失败
    if(err instanceof joi.ValidationError){
        return res.send({
            code:1,
            message:err.message,
        })
    }
    //token验证失败
    if(err.name==='UnauthorizedError'){
        return res.send({code:1,message:'身份认证失败'})
    }

    //其他错误
    res.send({
        code:1,
        message:err.message,
    })
})

app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})
