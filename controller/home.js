const mongoose = require("mongoose");
const { Home } = require("../models");
const CardList = require("../db_data/test/home/card");
// let Card = mongoose.model('Card',Home.Card)
// for (let i = 0; i < CardList.length; i++) {
//   let cardRet = new Card({ name: CardList[i].name, num: CardList[i].num });
//   cardRet.save();
// }

exports.cardList = async (req, res, next) => {
  let Card = mongoose.model("Card", Home.Card);
  let data = await Card.find();
  res.status(200).json({
    status: 0,
    msg: "卡片接口获取成功",
    data,
  });
};
