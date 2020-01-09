// import * as _url from 'url'

const router = require('./router')

const methods = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
}

let runRouter = (res,req,ct,m,u) => {
  if (m === methods.get || m === methods.delete ){
    if(req.url){
      router(
        {method: m, url: u},
        res
      )
    }else{
      res.setHeader('content-type', 'text/html')
      res.end('no req url')
    }

  } else if (ct.includes('application/json')){
    res.setHeader('content-type', 'text/html')
    let pb = JSON.stringify(req.body)
    if (pb.trim()) {
      pb = JSON.parse(pb)
      router(
        {method: m, url: u, data: pb },
        res
      )
    } else {
      res.setHeader('content-type', 'text/html')
      res.end('cant trim pb')
    }
  }else{
    res.setHeader('content-type', 'text/html')
    res.end('not get or doesnt have data')
  }
}

module.exports = (req, res) => {
  let u = req.url.replace('/api', '')
  let m = req.method
  const rh = req.headers
  const ct = rh['content-type']
  switch(m){
    case 'POST':
      runRouter(res,req,ct,m,u)
      break;
    case 'DELETE':
      runRouter(res,req,ct,m,u)
      break;
    case 'GET':
      runRouter(res,req,ct,m,u)
      break;
    default:
      res.setHeader('content-type', 'text/html')
      res.end('not post delete or get')
      break;
  }

}




