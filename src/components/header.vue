<template>
  <section class="c-header">
    <h1 class="headerh1">
      OOP
    </h1>
    <nuxt-link
      class="loginlink"
      to="/login"
    >
      login
    </nuxt-link>
  </section>
</template>
<script>
export default {
}
</script>
<style>

.c-header {
  padding: 40px;
  position: relative;
  border-bottom: 1px solid;
}
.headerh1{
  position: absolute;
  left: 50px;
  top:50%;
  transform: translateY(-50%)
}
.loginlink{
  position: absolute;
  right: 50px;
  top:50%;
  transform: translateY(-50%)
}
</style>
