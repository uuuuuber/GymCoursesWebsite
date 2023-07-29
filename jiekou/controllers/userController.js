const db=require('../config/db')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {jwtSecretKey}=require('../config/jwtSecretKey')
/**
 * 注册接口
 */

exports.registerController=(req,res)=>{

   
    //用户名或密码判空效验
    let {userName,password}=req.body
    if(!userName||!password){
        return res.send({code:1,message:'用户名或者密码不能为空'})
    }

    //用户名查重
    const userSql="select * from user where zhanghao=?"
    db.query(userSql,userName,(err,results)=>{
        if(err){
            return res.send({
                code:1,
                message:err.message
            })
        }

        //判断用户是否在数据库中存在
        if(results.length>0){
            return res.send({
                code:1,
                message:'用户名已经存在'
            })
        }

        //用户密码加密
        const bcrypt=require('bcryptjs')
        passwordB=bcrypt.hashSync(password,10)

        //随机生成头像
        const imgList = [
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/10.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/11.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/12.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/13.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/15.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/16.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/17.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/18.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/19.jpeg',
          ]
        // 随机生成1-10的整数
        const num = Math.floor(Math.random() * 10 + 1);
        

        //用户信息插入数据库
        const userInsertSql='insert into user(zhanghao,pwd,head_img) value(?,?,?)'
        db.query(userInsertSql,[userName,passwordB,imgList[num]],(err,results)=>{
            if(err){
                return res.send({code:1,message:err.message})
            }
            res.send({
                code:0,
                message:'注册成功'
            })
        })
    })

    // const sql="insert into user (name,pwd,head_img) value ('老六','666666','https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/19.jpeg')"
    // db.query(sql,(err,results)=>{
    //     if(err){
    //         return res.send({code:1,message:err.message})
    //     }
    //     res.send({
    //         code:0,
    //         data:'注册成功',
    //     })
    // })
}
/**
 * 注册接口
 */

 exports.adminregisterController=(req,res)=>{

   
    //用户名或密码判空效验
    let {userName,password}=req.body
    if(!userName||!password){
        return res.send({code:1,message:'用户名或者密码不能为空'})
    }

    //用户名查重
    const userSql="select * from admin where zhanghao=?"
    db.query(userSql,userName,(err,results)=>{
        if(err){
            return res.send({
                code:1,
                message:err.message
            })
        }

        //判断用户是否在数据库中存在
        if(results.length>0){
            return res.send({
                code:1,
                message:'用户名已经存在'
            })
        }

        //用户密码加密
        const bcrypt=require('bcryptjs')
        passwordB=bcrypt.hashSync(password,10)

        //随机生成头像
        const imgList = [
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/10.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/11.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/12.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/13.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/15.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/16.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/17.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/18.jpeg',
            'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/19.jpeg',
          ]
        // 随机生成1-10的整数
        const num = Math.floor(Math.random() * 10 + 1);
        

        //用户信息插入数据库
        const userInsertSql='insert into admin(zhanghao,pwd,headImg) value(?,?,?)'
        db.query(userInsertSql,[userName,passwordB,imgList[num]],(err,results)=>{
            if(err){
                return res.send({code:1,message:err.message})
            }
            res.send({
                code:0,
                message:'注册成功'
            })
        })
    })
 }


/**
 * 登录接口
 */
exports.loginController=(req,res)=>{

    let {userName,password} =req.body
    const userSql='select * from user where zhanghao=?'
    db.query(userSql,userName,(err,results)=>{
        
        if(err){
            return res.send({code:1,message:err.message})

        }
        //判断账号存在
        if(results.length===0){
            return res.send({code:1,message:'账号不存在，请先注册！'})
        }
        
        //判断密码是否正确
        const compareState=bcrypt.compareSync(password,results[0].pwd)
        
        if(!compareState){
            return res.send({code:1,message:'密码错误'})

        }

        //jwt跨域认证
        //token生成
        const user={...results[0],pwd:''}
        token=jwt.sign(user,jwtSecretKey,{expiresIn:'24h'})
        res.send({code:0,message:'登录成功',token:'Bearer '+token})
    })
}

/**
 * 管理员登录接口
 */
 exports.adminLoginController=(req,res)=>{

    let {userName,password} =req.body
    const userSql='select * from admin where zhanghao=?'
    db.query(userSql,userName,(err,results)=>{
        
        if(err){
            return res.send({code:1,message:err.message})

        }
        //判断账号存在
        if(results.length===0){
            return res.send({code:1,message:'账号不存在，请先注册！'})
        }
        
        //判断密码是否正确
        const compareState=bcrypt.compareSync(password,results[0].pwd)
        
        if(!compareState){
            return res.send({code:1,message:'密码错误'})

        }

        //jwt跨域认证
        //token生成
        const user={...results[0],pwd:''}
        token=jwt.sign(user,jwtSecretKey,{expiresIn:'24h'})
        res.send({code:0,message:'登录成功',token:'Bearer '+token})
    })
}

/**
 * 用户信息查询逻辑
 */
exports.userInfoController=(req,res)=>{
    //获取前端token
    const token=req.headers.authorization;

    //解析token发送用户信息给前端
    const userInfo=jwt.verify(token.split('Bearer ')[1],jwtSecretKey);
    res.send({
        code:0,
        data:{zhanghao:userInfo.zhanghao,headImg:userInfo.head_img}
    })
}

exports.userInfoController2=(req,res)=>{
    const getUser="select * from user";
    db.query(getUser, (err, results) => {
        if (err) {
          return res.send({ code: 1, message: err.message });
        }
        res.send({
          code: 0,
            results,
            message: '查询成功',
        
        });
      });
}

