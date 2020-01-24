<template>
  <div class="home">
    <hero/>
    <div class="shop">
      <prodgrid :products="items" :rows="1" />
    </div>
    <billboard />
    <div class="shop">
      <prodgrid :products="items" :rows="3" />
    </div>
    <billboard />
    <div class="shop">
      <prodgrid :products="items" :rows="5" />
    </div>
  </div>
</template>

<script>
import hero from '~/components/home/hero'
import billboard from '~/components/home/billboard'
import prodgrid from '~/components/productGrid/product-grid'
import {mapState,mapActions} from 'vuex'
export default {
  components:{
    prodgrid,
    billboard,
    hero
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
  padding:100px;
}

</style>
