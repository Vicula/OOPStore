<template>
  <div>
    <slot
      v-if="err"
      :err="err"
      :vm="vm"
      :info="info"
      name="error"
    >
      Something went wrong
    </slot>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  props: {
    stopPropagation: Boolean
  },
  data() {
    return {
      err: false,
      vm: null,
      info: null
    }
  },
  errorCaptured(err, vm, info) {
    this.err = err
    this.vm = vm
    this.info = info
    return !this.stopPropagation
  }
}
</script>

<style scroped lang="scss">
</style>
