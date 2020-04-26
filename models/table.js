const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Table = new Schema({
  name:{
    type:String,
    required: true
  },
  province:{
    type: String,
    required: true
  },
  city:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  zip:{
    type:Number,
    required: true
  },
  createdAt:{
    type: Number,
    default: Date.now()
  },
  updataAt:{
    type: Number,
    default: Date.now()
  }
  
})
module.exports = {
  Table
}