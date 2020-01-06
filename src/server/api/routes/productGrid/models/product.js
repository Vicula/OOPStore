const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: String,
  handle: String,
  desc: String,
  variants: Array,
  options: Array,
  sku: Number,
  price: String,
  vendor: String,
  productType: String,
  tags: String,
  images: Array,
},{
  timestamps: true,
})

const model = mongoose.model('Product', productSchema)

module.exports = model
