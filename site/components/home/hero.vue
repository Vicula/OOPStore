<template>
  <section class="hero">
    <div></div>
    <div class="background"><img :src="require('@/assets/hero1.png')" /><img :src="require('@/assets/hero2.png')" /> <img :src="require('@/assets/hero3.png')" /></div>
  </section>
</template>
<script></script>
<style>
  .hero{
    width:100%;
    height:calc(100vh - 80px);
    background:#111;
    position: relative;
  }
  .hero .background img{
    width:25%;
    position: absolute;
    transform: scaleX(-1) translateY(-70%);
    top:50%;
  }
  .hero .background img:first-child{
    right:30%;
  }
  .hero .background img:nth-child(2){
    right:15%;
    transform: scaleX(-1) translateY(calc(-70% + 20px)) ;
    width:27%;
  }
  .hero .background img:last-child{
    right:0%;
    transform: scaleX(-1) translateY(calc(-70% + 50px));
    width:29%;
  }
</style>
