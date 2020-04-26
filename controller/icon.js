const mongoose = require('mongoose')
const { Icon } = require('../models')
const incoList = require('../db_data/test/icon')
let IconList = mongoose.model('Icon',Icon.Icon)
  // for (let i = 0; i < incoList.length; i++) {
  //   let icon = new IconList({icon:incoList[i].icon})
  //   icon.save()
  // }
exports.iconList = async (req,res,next)=>{
  

  IconList.find((err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.status(200).json({
        status:0,
        msg: 'icon数据获取成功', 
        data
      })
    }
  })
 
}