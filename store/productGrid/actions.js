import a from 'axios'
const baseURL = process.env.BASE_URL

export default {
  fetchProducts(){
    a.get(baseURL+'/productGrid/').then((r)=>{
      console.log(r)
    })
  },
}
