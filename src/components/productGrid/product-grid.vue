<template>
  <div>
    <div
      v-for="(group,index) in gridGroup(index)"
      :key="index"
    >
      <GridRow />
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

  methods:{
    gridGroup(index){
      let offset = index*this.cols
      return
    }
  }
}
</script>
<style></style>
