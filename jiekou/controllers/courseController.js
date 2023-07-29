/**
 * 课程查询接口
 */
const db=require('../config/db')

exports.getVidio=(req,res)=>{
  console.log('you');
  let pageSql='select * from `video`';
  db.query(pageSql,(err,results)=>{
    if(err){
      return res.send({code:1,message:err.message})
    }
    res.send({
      results,
      code:0,
      message: '查询成功',
    })
  })
}

exports.listVideo=(req,res)=>{
    //获取前端数据
    
    let { category,page,size }=req.query
    page=(page-1)*size;

    let pageSql='select * from video where del=0 and category=? order by courseId limit ?,?'
    let totalSql='select count(*) as total from video where del=0 and category=?'

    db.query(pageSql,[category,Number(page),Number(size)],(err,resPage)=>{
        if(err){
            return res.send({code:1,message:err.message})
        }
        db.query(totalSql,[category],(err,resTotal)=>{
            if(err){
                return res.send({code:1,message:err.message})
            }
            res.send({
                code:0,
                data:{
                    total:resTotal[0].total,
                    list:resPage,
                }
            })
        })
    })
    
}

/**
 * 课程修改接口
 */

 exports.updateVideoById = (req, res) => {

    let { title, price, id } = req.query;
    let arr = [];
    let changeSql = 'update video set ';
    //修改标题和价格
    if (title && price) {
      changeSql = changeSql + 'title=?,price=? where id=?';
      arr = [title, Number(price), Number(id)];
    } else if (title) {
    // 修改课程标题
      changeSql = changeSql + 'title=? where id=?';
      arr = [title, Number(id)];
    } else if (price) {
    // 修改课程价格
      changeSql = changeSql + 'price=? where id=?';
      arr = [Number(price), Number(id)];
    }
    db.query(changeSql, arr, (err, results) => {
      if (err) {
        return res.send({ code: 1, message: err.message });
      }
      res.send({
        code: 0,
        data: {
          message: '修改成功',
        },
      });
    });
  };

/**
 * 课程删除
 */
 exports.deleteVideoById = (req, res) => {
    let { id } = req.query;
    let deleteSql = 'update video set del=1 where id=?';
    db.query(deleteSql, id, (err, results) => {
      if (err) {
        return res.send({ code: 1, message: err.message });
      }
      res.send({
        code: 0,
        data: {
          message: '删除成功',
        },
      });
    });
  };