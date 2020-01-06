import a from 'axios'

export default {
  getNavList: () => {
    a.get('/api/admin').then((r)=>{
      return r.data
    })
  },
}
