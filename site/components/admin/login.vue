<template>
  <section class="login">
    <div>
      <input
        v-model="e"
        type="email"
        placeholder="email"
        name="email"
      >
    </div>
    <div>
      <input
        v-model="p"
        type="password"
        placeholder="password"
        name="password"
      >
    </div>
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
<style scroped lang="scss">

input{
  width: 250px;
  padding: 5px;
  margin-bottom: 15px;
}

</style>
