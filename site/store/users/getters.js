export default {
  isAuthenticated(s) {
    return s.auth.loggedIn
  },

  loggedInUser(s) {
    return s.auth.user
  }
}
