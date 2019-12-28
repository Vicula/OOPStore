import a from 'axios'
const baseURL = process.env.BASE_URL

export default {
  register({commit},d){
    a.post(baseURL+'/users/add',d).then((r)=>{
      commit('setUser',r)
    })
  },

  login({commit},d){
    a.get(baseURL+'/users/'+d).then((r)=>{
      commit('setUser',r)
    })
  }
}
