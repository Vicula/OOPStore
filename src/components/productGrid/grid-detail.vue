<template>
  <div
    v-if="prod.images"
    class="product"
  >
    <div><img :src="prod.images[0] ? prod.images[0] : 'https://picsum.photos/seed/oop/200/200'"></div>
    <div>
      <h2>{{ prod.title }}</h2>
      <span v-html="prod.desc" />
      <p>${{ prod.price }}</p>
      <p>{{ prod.productType }}</p>
      <p>{{ prod.sku }}</p>
      <p>{{ prod.vendor }}</p>
    </div>
  </div><div v-else>
    Loading
  </div>
</template>
<script>
export default {

  props:{
    prod:{
      type:Object,
      default:()=>{return {}}
    }
  }
}
</script>
<style>
  .product{
    display:flex;
    justify-content: center;
    padding:100px;
  }
</style>
