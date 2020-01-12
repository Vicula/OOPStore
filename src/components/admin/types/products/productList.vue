<template>
  <section class="productsList">
    <div>
      <h2>{{ title }}</h2><button @click="submit">
        Add New
      </button>
    </div>
    <div>
      <p v-if="!products.length">
        Loading
      </p>
      <section v-else>
        <div
          v-for="(prod,key) in products"
          :key="key"
          @click="edit(prod)"
        >
          <span style="margin-bottom:15px;display:block;">{{ prod.title }}</span>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  props:{
    title:{
      type: String,
      default:'Products'
    },
    submit:{
      type: Function,
      default:()=>{}
    },
    edit:{
      type: Function,
      default:()=>{}
    },
    products:{
      type:Array,
      default: ()=>{return[]}
    }
  },

  data: () => {
    return {
      e: '',
      p: ''
    }
  }
}
</script>
<style>

input{
  width: 250px;
  padding: 5px;
  margin-bottom: 15px;
}

</style>
