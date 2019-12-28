export default {
  setUser(s,d){
    s.users.user.facade({data:d})
    s.users.safeUser = d
  }
}
