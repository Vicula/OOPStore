<template>
  <section class="login">
   <input type="email" placeholder="email" name="email" v-model="e" >
    <input type="password" placeholder="password" name="password" v-model="p" >
    <button @click="submit({e:e,p:p})">submit</button>
  </section>
</template>
<script>
export default {
  props:{
    submit:{
      type: Function,
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
<style></style>
