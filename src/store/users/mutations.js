export default {
  setAdminState(s,d){
    s.users.user.facade({data:d})
    s.users.safeUser = d
  },

}
