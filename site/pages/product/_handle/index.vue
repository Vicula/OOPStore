<template>
  <div class="container">
    <prodDetail :prod="prod" />
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
    ...mapActions('productGrid',['fetch']),
    fetchProducts(){let vm=this;this.fetch().then(()=>{
        vm.items.map((p)=>{
          if (p._id === vm.$route.params.handle) vm.prod = p
        })
      })}
  },
  computed:{
    ...mapState('productGrid',['items'])
  },
  mounted(){
      this.fetchProducts()
  }
}
</script>

<style>

</style>
