<template>
  <section class="register">
    <div>
      <input
        v-model="f"
        type="text"
        placeholder="First Name"
        name="first name"
      >
    </div>
    <div>
      <input
        v-model="l"
        type="text"
        placeholder="Last Name"
        name="last name"
      >
    </div>
    <div>
      <input
        v-model="e"
        type="email"
        placeholder="Email"
        name="email"
      >
    </div>
    <div>
      <input
        v-model="p"
        type="password"
        placeholder="Password"
        name="password"
      >
    </div>
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
<style scroped lang="scss">

input{
  width: 250px;
  padding: 5px;
  margin-bottom: 15px;
}

</style>
