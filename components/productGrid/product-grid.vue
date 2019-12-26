<template>
  <div>
    <div>
      <GridRow v-for="product in products" :key="product.id" />
    </div>
  </div>
</template>
<script>
import GridRow from './grid-row'
export default {

  components:{
    GridRow
  },

  props:{
    rows:{
      type: Number,
      default: 1
    },
    cols:{
      type: Number,
      default: 4
    },
    products:{
      type: Array,
      default:()=>{
        return []
      }
    }
  },
}
</script>
<style></style>
