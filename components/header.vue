<template>
  <section class="c-header">
    <Logo class="c-header__logo" />
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
<style>
.c-header {
  padding: 20px;
}
.c-header__logo {
  width: 50px;
}
</style>
