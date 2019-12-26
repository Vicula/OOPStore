//Include mediator to make routes dynamically added
const mediator = require('../../mediator')
// Everything below stays self contained
const router = require('express').Router()
let Product = require('./models/product')

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const title = req.body.title
  const handle = req.body.handle
  const desc = req.body.desc
  const variants = req.body.variant
  const options = req.body.options
  const sku = req.body.sku
  const price = req.body.price
  const vendor = req.body.vendor
  const productType = req.body.productType
  const tags = req.body.tag
  const images = req.body.images

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
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      title = req.body.title
      handle = req.body.handle
      desc = req.body.desc
      variants = req.body.variant
      options = req.body.options
      sku = req.body.sku
      price = req.body.price
      vendor = req.body.vendor
      productType = req.body.productType
      tags = req.body.tag
      images = req.body.images

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
