<template>
  <section class="hero">
    <div></div>
    <div class="background">
      <div class="row row1">
        <span class="shoe"><img :src="require('@/assets/vulcan.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airmax.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/presto.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/chuck.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/jordan2.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/converse.png')" /></span>
      </div>
      <div class="row row2">
        <span class="shoe"><img :src="require('@/assets/vulcan.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airmax.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/presto.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/chuck.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/jordan2.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/converse.png')" /></span>
      </div>
      <div class="row row3">
        <span class="shoe"><img :src="require('@/assets/vulcan.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airmax.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/presto.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/chuck.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/jordan2.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/converse.png')" /></span>
      </div>
    </div>
  </section>
</template>
<script>
  import gsap from "gsap";
  export default {
    mounted(){
      for(let i=1;i<4;i++){
        gsap.set(`.row${i} .shoe`, {

          x:(i)=>{
            return i * 300;
          }
        })
        gsap.to(`.row${i} .shoe`, 50, {
          ease: 'Linear.easeNone',
          x: '+=1440', //move each box 500px to right
          modifiers: {
            x:(x)=>{
              return x % 1440 //force x value to be between 0 and 500 using modulus
            }
          },
          repeat: -1
        })
      }
    }
  }
</script>
<style>
  .hero{
    width:100%;
    height:calc(100vh - 80px);
    background:#111;
    position: relative;
  }

  .row{
    overflow: hidden;
    position: relative;
    height: 200px;
  }

  .shoe{
    position:absolute;
    width:200px;
  }
  .shoe img{
    width: 100%;
  }

</style>
