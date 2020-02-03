<template>
  <section class="c-header" :class="windowTop > 100 ? 'c-header-fixed' : ''">
    <h1 class="headerh1">
      Off - White
    </h1>
    <div class="nav">
      <accIcon />
      <bagIcon />
      <searchIcon />
      <hamIcon />
    </div>
  </section>
</template>
<script>
import accIcon from './nav/accIcon'
import bagIcon from './nav/bagIcon'
import hamIcon from './nav/hamIcon'
import searchIcon from './nav/searchIcon'
export default {

  components:{
    accIcon,
    bagIcon,
    hamIcon,
    searchIcon
  },
  data(){
    return {
      windowTop:''
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  }

}
</script>
<style scroped lang="scss">

.c-header {
  position: fixed;
  top:0;
  left: 0;
  z-index: 100;
  right:0;
  padding: 40px;
  color:white;
}
.c-header.c-header-fixed{
  color:black;
  background: white;
}
.headerh1{
  position: absolute;
  left: 50px;
  top:50%;
  transform: translateY(-50%)
}
.nav{
  position: absolute;
  right: 50px;
  top:50%;
  transform: translateY(-50%);
  display:flex;

}
.nav .Icon{width:24px;height:24px;}
.nav .Icon--account{
  width:20px;height:20px;
}
</style>
