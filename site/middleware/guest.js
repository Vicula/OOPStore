export default function ({ store, redirect }) {
  console.log(store)
  if (store.state.users.loggedIn) {
    return redirect('/')
  }
}
