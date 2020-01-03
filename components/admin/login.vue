<template>
  <section class="login">
    <input
      v-model="e"
      type="email"
      placeholder="email"
      name="email"
    >
    <input
      v-model="p"
      type="password"
      placeholder="password"
      name="password"
    >
    <button @click="submit({e:e,p:p})">
      submit
    </button>
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
