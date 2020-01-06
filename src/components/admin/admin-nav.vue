<template>
  <section class="admin-display">

  </section>
</template>
<script>
export default {
  props:{
    links:{
      type: Object,
      default: ()=>{},
      required:true
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
