const {firstDecrypt, secDecrypt, firstEncrypt, secEncrypt} = require('~/helpers/crypt')

export default () => {
  var _private = { //private
    p: [],
    set: (v) => {
      this.p = secDecrypt(firstDecrypt(v))
    },
    get: () => {
      return secEncrypt(firstEncrypt(this.p))
    },

  }
  return { //exposed to public
    facade: (a) => {
      if(a.data) _private.set(a.data)
      if(a.fetch) _private.get()
    }
  }
}
