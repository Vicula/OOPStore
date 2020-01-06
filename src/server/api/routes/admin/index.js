const fileWalker = require('../../../../helpers/filewalker.js')
const modules = {}
let router = {}
let path = 'server/api/routes'

fileWalker(path,(e,d)=>{
  if (e) throw e
  d.map((p)=>{
    if(p.includes('index.js')){
      if(!p.includes('admin')){
        let r = require('../../'+p.split('/api')[1])
        let k = p.split('/routes/')[1].split('/index.js')[0]
        modules[k] = r
      }
    }
  })
})

router['CAT'] = 'ADMIN' // Admin designation

router['GET/'] = (req, res, c) => { //GET
  res.json(modules)
}

modules['admin'] = router
module.exports = router
