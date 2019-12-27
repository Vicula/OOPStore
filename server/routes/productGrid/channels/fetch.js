import mediator from '@/server/mediator'
import a from 'axios'
const baseURL = process.env.BASE_URL

mediator.subscribe('fetchProds', (arg) => {
  a.get(baseURL+'/productGrid/').then((r)=>{
    console.log(r)
  })
})
