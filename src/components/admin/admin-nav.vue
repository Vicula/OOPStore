<template>
  <section class="admin-nav">
    <div class="nav-list">
      <span
        :class="active === 'Home' ? 'linkActive': 'link'"
        @click="submit('Home')"
      >Home</span>
      <span
        v-for="(link,key) in links"
        :key="key"
        :class="active === link.title ? 'linkActive': 'link'"
        @click="submit(key)"
      >{{ link.title }}</span>
    </div>
    <div class="nav-footer" />
  </section>
</template>
<script>
export default {
  props:{
    links:{
      type: Object,
      default: ()=>{},
      required:true
    },
    submit:{
      type: Function,
      default: ()=>{},
      required:true
    },
    active:{
      type: String,
      default: 'Home',
      required:true
    }
  },
}
</script>
<style>

.admin-nav{
  padding:40px 50px;
  background: lightgray;
  height:100%;
}

.nav-list{
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
  width:100%;
}
.nav-list .link,.nav-list .linkActive{
  width: 100%;
  display:block;
  text-align: left;
  cursor: pointer;
  margin-bottom: 10px;
}

.nav-list .linkActive{
  color:goldenrod;
  text-decoration: underline;
}


</style>
