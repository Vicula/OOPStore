<template>
  <div class="container">
    <prodDetail :prod="prod"/>
  </div>
</template>

<script>
import prodDetail from '../../../components/productGrid/grid-detail'
import {mapState,mapActions} from 'vuex'

export default {
  components:{
    prodDetail
  },
  data(){
    return {
      prod:{}
    }
  },
  methods:{
    ...mapActions('productGrid',['fetchProducts']),
    fetch(){this.fetchProducts()}
  },
  computed:{
    ...mapState('productGrid',['safeProducts'])
  },
  mounted(){
      this.fetchProducts().then(()=>{
        this.safeProducts.map((p)=>{
          if (p._id === this.$route.params.handle) this.prod = p
        })
      })
  }
}
</script>

<style>

</style>
