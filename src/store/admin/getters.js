import a from 'axios'

export default {
  getNavList: (s) => {
   return s.navList
  },
  getAdminState: (s) => {
    console.log('I AM GETTNG ADMIN STATE')
    return s.adminState
  }
}
