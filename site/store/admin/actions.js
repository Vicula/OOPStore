import a from 'axios'

export default {
  fetchNavList: ({commit})=>{
    a.get('/api/admin').then((r)=>{
      commit('setNavList',r.data)
    })
  }
}
