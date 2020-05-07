const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
   id: String,
   name : String,
   industry : String,
   email : String,
   phone_number : String,
   img_url : String
})

module.exports = partnerSchema;
