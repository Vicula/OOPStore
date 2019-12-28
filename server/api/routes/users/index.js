let User = require('./models/user')
let router = {}

router['TYPE'] = 'MAIN' // Admin designation

router['GET/'] = (req, res) => { //GET
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
}

router['GET/:id'] = (req, res, c) => { //GET
  User.findById(req.params.id)
    .then(users => {
      let p = secEncrypt(firstEncrypt(users))
      if(c){c(p)}else{res.json(p)}
    })
    .catch(err => res.status(400).json('Error: ' + err))
}

router['POST/add'] = (req, res) => { //POST
  const username = req.body.username

  const newUser = new User({username})

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
}

module.exports = router
