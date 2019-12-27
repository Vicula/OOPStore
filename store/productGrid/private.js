const {firstDecrypt} = require('~/helpers/crypt')

export const productsModule = () => {
  let products = {}; //private
  return { //exposed to public
      // decryption for getter
      getProds: () => {
        return firstDecrypt(firstDecryptproducts)
      },
      setProds: (v) => {
        products = v
      }
  }
}
