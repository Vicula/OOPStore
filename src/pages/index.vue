<template>
  <div class="shop">
    <prodgrid :products="safeProducts" />
  </div>
</template>

<script>
import prodgrid from '~/components/productGrid/product-grid'
import {mapState,mapActions} from 'vuex'
export default {
  components:{
    prodgrid
  },
  methods:{
    ...mapActions('productGrid',['fetchProducts']),
    fetch(){this.fetchProducts()}
  },
  computed:{
    ...mapState('productGrid',['safeProducts','products'])
  },
  mounted(){this.fetch()}

}
</script>

<style>
.shop{
  padding:100px 150px;
}

</style>
