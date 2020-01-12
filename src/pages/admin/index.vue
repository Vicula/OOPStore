<template>
  <div class="container">
    <error>
      <adminNav
        :links="getNavList"
        :active="getAdminState"
        :submit="setAdminState"
      />
    </error>
    <error>
      <adminDisplay
        :active="getAdminState"
        :routes="getNavList"
      />
    </error>
  </div>
</template>

<script>
import error from '../../components/error/error-boundary'
import adminDisplay from '../../components/admin/admin-display'
import adminNav from '../../components/admin/admin-nav'
import {mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  components:{
    adminNav,
    adminDisplay,
    error
  },

  data(){
    return {
      list:{}
    }
  },

  //used to 404 if not whitelisted user
  middleware: 'auth',

  mounted(){
    this.fetchNavList()
  },

  methods:{
    ...mapMutations('admin',['setAdminState']),
    ...mapActions('admin',['fetchNavList'])
  },

  computed:{
    ...mapGetters('admin', ['getNavList','getAdminState'])
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 81px);
  display:flex;
}
.container > div{
  display:block;
}
.container > div:first-child{
  width: 20%;
}

.container > div:last-child{
  width: 80%;
}
</style>
