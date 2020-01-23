<template>
  <div class="shop">
    <prodgrid :products="items" />
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
    ...mapActions('productGrid',['fetch']),
    fetchItems(){this.fetch()}
  },
  computed:{
    ...mapState('productGrid',['items','products'])
  },
  mounted(){this.fetchItems()
  }

}
</script>

<style>
.shop{
}

</style>
