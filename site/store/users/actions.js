// import a from 'axios'

export default {
  async register({commit},d){
    try {
      await this.$axios.post('register', {
        username: d.f + '|' + d.l,
        email: d.e,
        password: d.p
      })

      await this.$auth.loginWith('local', {
        data: {
          email: d.e,
          password: d.p
        },
      })

      this.$router.push('/')
    } catch (e) {
      //handle error
    }
  },

  async logout() {
    await this.$auth.logout();
  },

  async login({commit},d){
    try {
      await this.$auth.loginWith('local', {
        data: {
          email: d.e,
          password: d.p
        }
      })

      this.$router.push('/')
    } catch (e) {
      //handle error
    }
  }
}
