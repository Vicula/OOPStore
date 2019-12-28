import a from 'axios'
const baseURL = process.env.BASE_URL

export default {
  fetchProducts({commit}){
    a.get(baseURL+'/productGrid/').then((r)=>{
      commit('setProducts',r)
    })
  },
}
