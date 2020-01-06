import a from 'axios'
const baseURL = process.env.BASE_URL

export default {
  register({commit}){
    a.get(baseURL+'/productGrid/').then((r)=>{
      commit('setProducts')
    })
  },

  login({commit}){
    a.get(baseURL+'/productGrid/').then((r)=>{
      commit('setProducts')
    })
  }
}
