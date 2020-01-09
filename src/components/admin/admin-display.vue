<template>
  <section class="admin-display">
    <home v-if="active === 'Home'" />
    <products v-else-if="active === 'Products'" />
    <users v-else-if="active === 'Users'" />
  </section>
</template>
<script>
import products from './types/products/index'
import users from './types/users'
import home from './types/home'

export default {
  components:{
    products,
    users,
    home
  },

  props:{
    active:{
      type: String,
      default:'Home',
      required: true
    }
  },
}
</script>
<style>


</style>
