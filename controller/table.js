const mongoose = require("mongoose");
const { Table } = require("../models");
let tables = mongoose.model("Table", Table.Table);


  // for (let i = 0; i < 25; i++) {
  //   var a = new tables({
  //     name: '张三丰'+ i,
  //     province:'江西',
  //     city:'鹰潭市',
  //     address:'龙虎山',
  //     zip:335004
  //   })
  //   a.save()

  // }


exports.query = async (req, res, next) => {
  const { name = "", page, limit } = req.query;
  let _limit = limit - 0 || 10;
  let skip = (page - 0 || 0) * _limit;
  var retData = await tables.find({ $or: [{ name: { $regex: name } }] }, null, {
    skip,
    limit: _limit,
  });
  var total = await tables.count({ $or: [{ name: { $regex: name } }] });
  console.log(retData, total);
  res.status(200).json({
    status: 0,
    msg: "数据获取成功",
    data: {
      total: total,
      limit: _limit,
      page: skip,
      data: retData,
    },
  });
};
