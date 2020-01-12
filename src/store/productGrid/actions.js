import a from 'axios'
const baseURL = process.env.BASE_URL

export default {
  async fetch({commit}){
    await a.get('/api/productGrid/').then((r)=>{
      commit('setProducts',r)
    })
    return
  },
  add({dispatch},d){
    a.post('/api/productGrid/add',d).then((r)=>{
      console.log(r)
      dispatch('fetchProducts')
    })
  },
  deleteItem({dispatch},d){
    let id = '?id='+d._id
    a.delete('/api/productGrid/delete/'+id,d).then((r)=>{
      console.log(r)
      dispatch('fetchProducts')
    })
  },
  update({dispatch},d){
    let id = '?id='+d._id
    a.post('/api/productGrid/update/'+id,d).then((r)=>{
      console.log(r)
      dispatch('fetchProducts')
    })
  }
}
