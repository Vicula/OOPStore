<template>
  <section class="admin-display">
    <home v-if="active === 'Home'" />
    <products
      v-else-if="routes[active].type === 'PRODUCT'"
      :schema="routes[active]"
      :route="active"
    />
    <users v-else-if="routes[active].type === 'USER'" />
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
    },
    routes:{
      type: Object,
      default: ()=>{return{}},
      required:true
    }
  },
}
</script>
<style scroped lang="scss">


</style>
