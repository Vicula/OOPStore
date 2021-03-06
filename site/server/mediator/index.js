module.exports = () => {

  let subscribe = (channel, fn) => {
      if (!this.channels[channel]) this.channels[channel] = []
      this.channels[channel].push({ context: this, callback: fn })
      return this
  },

  publish = (channel) =>{
      if (!this.channels[channel]) return false
      let args = Array.prototype.slice.call(arguments, 1)
      for (let i = 0, l = this.channels[channel].length; i < l; i++) {
          let subscription = this.channels[channel][i]
          subscription.callback.apply(subscription.context, args)
      }
      return this
  }


  return {
      channels: {},
      publish: publish,
      subscribe: subscribe,
      installTo: (obj) => {
          obj.subscribe = subscribe
          obj.publish = publish
      }
  }

}
