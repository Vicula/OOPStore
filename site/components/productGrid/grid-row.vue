<template>
  <div class="gridRow">
    <gridItem
      v-for="(prod,key) in group"
      :key="key"
      :prod="prod"
      :width="cols"
    />
    <div v-if="group.length < 3"></div>
    <div v-if="group.length < 2"></div>
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
    },
    cols:{
      type:Number,
      default:3
    }
  }
}
</script>
<style scroped lang="scss">
  .gridRow{
    display:flex;
    justify-content: space-between;
    margin-bottom:0.5%;
  }
  .gridRow > div{
    width: 33%;
  }
</style>
