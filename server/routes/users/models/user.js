const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UsersSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  password: String
},{
  timestamps: true,
})

const model = mongoose.model('user', UsersSchema)

module.exports = model
