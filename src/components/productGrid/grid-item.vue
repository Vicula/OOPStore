<template>
  <div>
    <nuxt-link :to="'/product/'+prod._id">
    <div><img style="width:200px;height:200px;" :src="prod.images[0] ? prod.images[0] : 'https://picsum.photos/seed/oop/200/200'" /></div>
    <div>
      <p>{{prod.title}}</p><span>${{prod.price}}</span>
    </div>
    </nuxt-link>
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
<style></style>
