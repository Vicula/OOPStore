export default {
  setProducts(s,d){
    s.products({data:d})
    s.safeProducts = d.data
  }
}
