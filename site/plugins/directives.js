import Vue from 'vue'
export const inFocus = {
  isLiteral: true,
  inserted: (el, callback, vnode) => {
    let f = () => {
      console.log('LOOK AT Me 4')
      let rect = el.getBoundingClientRect()
      let inView = (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      )
      if (inView) {
        callback()
        window.removeEventListener('scroll', f)
      }
    }
    console.log('LOOK AT Me 2')
    window.addEventListener('scroll', f)
    f()
  }
}

Vue.directive('inFocus', inFocus )
