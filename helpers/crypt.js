const cjs = require('crypto-js')
const key = process.env.ENCRYPTION_KEY
const prv = process.env.PRIVATE_KEY

export const firstEncrypt = (v)=>{
  return cjs.AES.encrypt(JSON.stringify(v), key).toString()
}
export const firstDecrypt = (v)=>{
  let b  = cjs.AES.decrypt(v, prv)
  return JSON.parse(b.toString(cjs.enc.Utf8))
}
export const secEncrypt = (v)=>{
  return cjs.AES.encrypt(JSON.stringify(v), prv).toString()
}
export const secDecrypt = (v)=>{
  let b  = cjs.AES.decrypt(v, key)
  return JSON.parse(b.toString(cjs.enc.Utf8))
}
