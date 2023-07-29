const { result } = require('@hapi/joi/lib/base');
const db=require('../config/db')

//管理员查询订单
exports.orderList2=(req,res)=>{
  const getOrderList2='select * from `order`';
  db.query(getOrderList2,(err,result)=>{
    if (err) {
      return res.send({ code: 1, message: err.message });
    }
    res.send({
      code: 0,
      data: {
        result,
        message: '查询成功',
      },
    });
  })
}

//订单
exports.orderList=(req,res)=>{
    //获取前端数据
    let {zhanghao}=req.query;
    const getOrderList='select * from `order` where zhanghao=?'
    db.query(getOrderList,zhanghao,(err,result)=>{
      if (err) {
        return res.send({ code: 1, message: err.message });
      }
      res.send({
        code: 0,
        data: {
          result,
          message: '查询成功',
        },
      });
    })
   
}

//报名
exports.baoming=(req,res)=>{
  //获取前端数据
  let {name,zhanghao,title,price,time}=req.query
    console.log(name,time,price,zhanghao,title);
    const chazhong="select title from `order` where zhanghao=?"
    db.query(chazhong,zhanghao,(err,result)=>{
      console.log(result);
      for(let i=0;i<result.length;i++){
        console.log(result[i][i]);
      }
    })
    //插入数据
    const orderInsertSql='insert into `order`(name,time,price,zhanghao,title) value(?,?,?,?,?)'
    db.query(orderInsertSql,[name,time,price,zhanghao,title],(err,result)=>{
        if(err){
          return res.send({code:1,message:err.message})
      }
      res.send({
          code:0,
          message:'报名成功'
      })
    })
}