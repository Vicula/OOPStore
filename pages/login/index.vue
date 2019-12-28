<template>
  <div class="login_register">
    <div>
      <error>
        <login :submit="login" />
      </error>
      <error>
        <register :submit="register" />
      </error>
    </div>
  </div>
</template>

<script>
import login from '~/components/admin/login'
import register from '~/components/admin/register'
import error from '~/components/error/error-boundary'
import {mapActions} from 'vuex'

export default {

  components:{
    login,
    register,
    error
  },

  data: ()=>{
    return{

    }
  },

  methods:{
    ...mapActions('users',['login','register']),
  }
}
</script>

<style>

</style>
