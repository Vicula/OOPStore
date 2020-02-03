<template>
  <div class="siteBody" >
    <section class="siteWrap">
      <error><siteHeader /></error>
      <nuxt />
      <error><siteFooter /></error>
    </section>
  </div>
</template>
<script>
import siteHeader from '~/components/header'
import siteFooter from '~/components/footer'
import error from '~/components/error/error-boundary'
import {mapActions} from 'vuex'

export default {

  components:{
    siteHeader,
    siteFooter,
    error
  },
  mehods:{
    ...mapActions('productGrid',['fetch'])
  },
}
</script>
<style>
html {
  background:#111;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.siteWrap{
  max-width: 1440px;
  height: 100%;
  margin: auto;
  background: white;
  margin-top:80px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
