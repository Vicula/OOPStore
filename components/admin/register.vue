<template>
  <section class="register">
    <input
      v-model="f"
      type="text"
      placeholder="First Name"
      name="first name"
    >
    <input
      v-model="l"
      type="text"
      placeholder="Last Name"
      name="last name"
    >
    <input
      v-model="e"
      type="email"
      placeholder="Email"
      name="email"
    >
    <input
      v-model="p"
      type="password"
      placeholder="Password"
      name="password"
    >
    <button @click="submit({f:f,l:l,e:e,p:p})">
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
  data: ()=>{
    return {
      f: '',
      l: '',
      e: '',
      p: '',
    }
  }
}
</script>
<style></style>
