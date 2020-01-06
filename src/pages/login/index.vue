<template>
  <div class="login_register">
    <error>
      <h2>Login</h2>
      <br>
      <login :submit="login" />
    </error>
    <error>
      <h2>Sign Up</h2>
      <br>
      <register :submit="register" />
    </error>
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

.login_register{
  padding: 150px 100px;
  display: flex;
  justify-content: space-evenly
}

</style>
