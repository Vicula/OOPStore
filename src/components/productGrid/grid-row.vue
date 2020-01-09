<template>
  <div class="gridRow">
    <gridItem v-for="(prod,key) in group" :key="key" :prod="prod" />
  </div>
</template>
<script>
import gridItem from './grid-item'
export default {
  components:{
    gridItem
  },
  props:{
    group:{
      type:Array,
      default:()=>{return []}
    }
  }
}
</script>
<style>
  .gridRow{
    display:flex;
    justify-content: space-between;
    margin-bottom:50px;
  }
</style>
