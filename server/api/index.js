// import * as _url from 'url'

const router = require('./router')

const methods = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
}

let runRouter = (res,req,ct,m,u) => {
  if (m === methods.get){
    if(req.url){
      router(
        {method: m, url: u},
        res
      )
    }else{
      res.setHeader('content-type', 'text/html')
      res.end('error')
    }

  } else if (ct === 'application/json'){
    res.setHeader('content-type', 'text/html')
    let pb = ''
    req.on('data', (c) => {
      if (c) {
        pb += c.toString()
      }
    })
    req.on('end', () => {
      if (pb.trim()) {
        pb = JSON.parse(pb)
        router(
          {method: m, url: u, data: pb },
          res
        )
      } else {
        res.setHeader('content-type', 'text/html')
        res.end('error')
      }
    })
  }else{
    res.setHeader('content-type', 'text/html')
    res.end('error')
  }
}

module.exports = (req, res) => {
  let u = req.url.replace('/api', '')
  let m = req.method
  const rh = req.headers
  const ct = rh['content-type']
  switch(m){
    case 'POST','DELETE','GET':
      runRouter(res,req,ct,m,u)
      break;
    default:
      res.setHeader('content-type', 'text/html')
      res.end('error')
      break;
  }

}




