const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* 
    Image Schema for storing images in the 
    mongodb database
*/
var BanksSchema = new Schema({
  "_id": {
    type: String,
    required: true,
  },
  "BANK": {
    type: String,
    required: true,
  },
  "IFSC": {
    type: String,
    required: true,
  },
  "MICR": {
    type: String,
    default: "none",
  },
  "BRANCH": {
    type: String,
    required: true,
  },
  "ADDRESS": {
    type: String,
  },
  "CITY1": {
    type: String,
  },
  "CITY2": {
    type: String,
  },
  "STATE":{
      type:String,
      required: true,
  },
  "STD CODE":{
    type: Number,
  },
  "PHONE":{
    type: Number,
  },
  "DISTRIC":{
    type: String,
  },
  "STATE":{
    type: String,
  }

});

var BanksModel = mongoose.model("banks", BanksSchema);

module.exports = BanksModel;