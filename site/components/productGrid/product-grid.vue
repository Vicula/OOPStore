<template>
  <div>
    <div
      v-for="(group,index) in gridGroup()"
      :key="index"
    >
      <GridRow :cols="cols" :group="group" />
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
      default: 3
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
      let i,j,t,chunk = this.cols
      let arr = []
      for (i=0,j=this.products.length; i<j; i+=chunk) {
          t = this.products.slice(i,i+chunk)
         if (arr.length < this.rows) arr.push(t)
      }
      return arr
    }
  }
}
</script>
<style scroped lang="scss"></style>
