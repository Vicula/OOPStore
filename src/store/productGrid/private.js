const {firstDecrypt, secDecrypt, firstEncrypt, secEncrypt} = require('~/helpers/crypt')

export default () => {
  var _private = { //private
    p: [],
    set: (v) => {
      this.p = secEncrypt(firstEncrypt(v))
    },
    get: () => {
      return secDecrypt(firstDecrypt(this.p))
    },

  }
  return { //exposed to public
    facade: (a) => {
      if(a.data) _private.set(a.data)
      if(a.fetch) _private.get()
    }
  }
}
