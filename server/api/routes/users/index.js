let User = require('./models/user')
let router = {}

router['TYPE'] = 'MAIN' // Admin designation

router['GET/'] = (req, res) => { //GET
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
}

router['GET/:id'] = (req, res, c) => { //GET login
  User.findById(req.params.id)
    .then(users => {
      let p = secEncrypt(firstEncrypt(users))
      if(c){c(p)}else{res.json(p)}
    })
    .catch(err => res.status(400).json('Error: ' + err))
}

router['POST/add'] = (req, res, c) => { //POST register
  const fname = req.body.f
  const lname = req.body.l
  const _id = req.body.e
  const password = req.body.p

  const newUser = new User({fname,lname,_id,password})

  newUser.save()
    .then(user => {if(c){c(user)}else{res.json(user)}})
    .catch(err => res.status(400).json('Error: ' + err))
}

module.exports = router
