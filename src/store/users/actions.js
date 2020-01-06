import a from 'axios'
const baseURL = process.env.BASE_URL

export default {
  register({commit},d){
    a.post('/api/users/add',d).then((r)=>{
      if(r.data != 'error'){
        commit('setUser',r)
      }
    })
  },

  login({commit},d){
    a.post('/api/users/',d).then((r)=>{
      commit('setUser',r)
    })
  }
}
