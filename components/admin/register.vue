<template>
  <section class="register">
    <input type="text" placeholder="First Name" name="first name" v-model="f" >
    <input type="text" placeholder="Last Name" name="last name" v-model="l" >
    <input type="email" placeholder="Email" name="email" v-model="e" >
    <input type="password" placeholder="Password" name="password" v-model="p" >
    <button @click="submit({f:f,l:l,e:e,p:p})">submit</button>
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
