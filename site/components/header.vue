<template>
  <section class="c-header">
    <h1 class="headerh1">
      OOP
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
  }
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
