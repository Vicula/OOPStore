const fileWalker = require('../../helpers/filewalker.js')
const modules = {}
let path = 'server/api/routes'

fileWalker(path,(e,d)=>{
  if (e) throw e
  d.map((p)=>{
    if(p.includes('index.js')){
      let r = require('.'+p.split('/api')[1])
      let k = p.split('/routes/')[1].split('/index.js')[0]
      modules[k] = r
    }
  })
})

const getModule = u => {
  const m = u.match(/[a-zA-Z]+/)[0]
  return modules[m]
}

const getAction = (u,m) => {
  // /productGrid/update/:id
  // /productGrid
  const l = u.match(/[^/]+/g).length
  let a = u.match(/[^/]+/g)[1]
  if(m === 'GET' || m === 'DELETE'){
    //GET/
    //DELETE/:id
    let na = '';l === 2? na = m+'/:id' : na = m+'/'
    return na
  }else{
    let i = typeof u.match(/[^/]+/g)[2] !== 'undefined' ? u.match(/[^/]+/g)[2] : ''
    //POST/update/:id
    //POST/add
    let na = '';i ? na = m+'/'+a+'/:id' : na = m+'/'+a
    return na
  }

}

module.exports = (o, res, c) => {
  const m = o.method && o.method.toUpperCase()
  const r = getModule(o.url)
  let a = getAction(o.url,m)
  if(r[a]){
    r[a](o, res, c)
  }else{
    res.setHeader('content-type', 'text/html')
    res.end('doesnt have the action in the module')
  }
}
