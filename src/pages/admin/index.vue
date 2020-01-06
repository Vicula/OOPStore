<template>
  <div class="container">
    <error><adminNav /></error> <error><adminDisplay /></error>
  </div>
</template>

<script>
import error from '../../components/error/error-boundary'
import adminDisplay from '../../components/admin/admin-display'
import adminNav from '../../components/admin/admin-nav'
import {mapGetters} from 'vuex'

export default {
  components:{
    adminNav,
    adminDisplay,
    error
  },

  //used to 404 if not whitelisted user
  middleware: 'auth',

  computed:{
    ...mapGetters('admin', {getNavList:'getNavList'})
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
