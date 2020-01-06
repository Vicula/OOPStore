const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UsersSchema = new Schema({
  fname: String,
  lname: String,
  _id: String,
  password: String
},{
  timestamps: true,
})

UsersSchema.virtual('email').get(()=> {
  return this._id
})

const model = mongoose.model('user', UsersSchema)

module.exports = model
