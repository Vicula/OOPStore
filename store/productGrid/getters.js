const {secDecrypt} = require('~/helpers/crypt')

// Decryption for DOM use happens here

export default {
  getGridProducts: ({ productGrid },o) => {
    let p = secDecrypt(productGrid.products.getProds())
    let r = {}
    Object.keys(p).map((k) =>{
      o.map((v)=>{
        p[k][v.key].includes(v.val) ? r[k] = p[k] : ()=>{return}
      })
    })
    return r
  },
}
