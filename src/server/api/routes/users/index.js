let User = require('./models/user')
const {firstDecrypt, secDecrypt, firstEncrypt, secEncrypt} = require('../../../../helpers/crypt')
let router = {}

router['CAT'] = 'MAIN' // Admin designation

router['TITLE'] = 'Users'

router['TYPE'] = 'USERS'

router['GET/'] = (req, res) => { //GET
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
}

// router['POST/'] = (req, res, c) => { //POST login
//   const id = req.url.replace('/api', '').match(/[^/]+/g)[1]
//   User.findById(id)
//     .then(users => {
//       let p = secEncrypt(firstEncrypt(users))
//       if(c){c(p)}else{res.json(p)}
//     })
//     .catch(err => res.status(400).json('Error: ' + err))
// }

router['POST/add'] = (req, res, c) => { //POST registers
  const fname = req.data.f
  const lname = req.data.l
  const _id = req.data.e
  const password = req.data.p

  const newUser = new User({fname,lname,_id,password})

  newUser.save()
    .then(user => {if(c){c(user)}else{res.json(user)}})
    .catch(err => res.status(400).json('Error: ' + err))
}

module.exports = router
