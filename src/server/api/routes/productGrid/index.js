const {firstEncrypt,secEncrypt} = require('../../../../helpers/crypt.js')
let Product = require('./models/product')
let router = {}

router['CAT'] = 'MAIN' // Admin designation

router['TITLE'] = 'Products'

router['TYPE'] = 'PRODUCT'

router['GET/'] = (req, res, c) => { //GET
  Product.find()
    .then(products => {
      // let p = secEncrypt(firstEncrypt(products))
      let p = products
      if(c){c(p)}else{res.json(p)}
    })
    .catch(err => res.status(400).json('Error: ' + err))
}

router['POST/add'] = (req, res,c) => { // POST
  const title = req.data.title
  const handle = req.data.handle
  const desc = req.data.desc
  const variants = req.data.variant
  const options = req.data.options
  const sku = req.data.sku
  const price = req.data.price
  const vendor = req.data.vendor
  const productType = req.data.productType
  const tags = req.data.tag
  const images = req.data.images


  const newProduct = new Product({
    title,
    handle,
    desc,
    variants,
    options,
    sku,
    price,
    vendor,
    productType,
    tags,
    images
  })

  newProduct.save()
    .then(prod => {if(c){c()}else{res.json(prod)}})
    .catch(err => res.status(400).json('Error: ' + err))
}

router['GET/:id'] = (req, res, c) => { //GET
  Product.findById(req.params.id)
    .then(products => {
      let p = secEncrypt(firstEncrypt(products))
      if(c){c(p)}else{res.json(p)}
    })
    .catch(err => res.status(400).json('Error: ' + err))
}

router['DELETE/'] = (req, res, c) => { //DELETE
  Product.findByIdAndDelete(req.url.split('?id=')[1])
    .then(() => {if(c){c()}else{res.json('product deleted!')}})
    .catch(err => res.status(400).json('Error: ' + err))
}

router['POST/update/:id'] = (req, res, c) => { //POST

  Product.findById(req.url.split('?id=')[1])
    .then(product => {
      product.title = req.data.title
      product.handle = req.data.handle
      product.desc = req.data.desc
      product.variants = req.data.variant
      product.options = req.data.options
      product.sku = req.data.sku
      product.price = req.data.price
      product.vendor = req.data.vendor
      product.productType = req.data.productType
      product.tags = req.data.tag
      product.images = req.data.images

      product.save()
        .then(() => {if(c){c()}else{res.json('product updated!')}})
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
}



module.exports = router
