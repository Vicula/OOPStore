<template>
  <section class="hero">
    <div></div>
    <div class="background">
      <div class="row row1">
        <span class="shoe"><img :src="require('@/assets/vulcan.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/chuck.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/presto.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airforce.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/jordan2.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airmax.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/converse.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/vapor.png')" /></span>
      </div>
      <div class="row row2">
        <span class="shoe"><img :src="require('@/assets/vulcan.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airmax.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/presto.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airforce.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/chuck.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/jordan2.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/converse.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/vapor.png')" /></span>
      </div>
      <div class="row row3">
        <span class="shoe"><img :src="require('@/assets/chuck.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/vulcan.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airmax.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/presto.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/converse.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/vapor.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/airforce.png')" /></span>
        <span class="shoe"><img :src="require('@/assets/jordan2.png')" /></span>
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

          x:(b)=>{
            return ((b * 250) ) + (i * 500);
          }
        })

        gsap.to(`.row${i} .shoe`, 50, {
          ease: 'none',
          x: '+='+(500 + (i*700)), //move each box 500px to right
          modifiers: {
            x:(x)=>{
              let rt = parseInt(x) % 2000

              if(rt <= 0) rt = 1999

              return rt + 'px'
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
    max-height: 720px;
  }

  .row{
    overflow: hidden;
    position: relative;
    height: 200px;
    width:2000px;
    left:50%;
    transform: translate(-50%,0);
  }

  .background{
    overflow: hidden;
    opacity: 0.5;
  }

  .shoe{
    position:absolute;
    width:200px;
  }
  /* .row2 .shoe img{
    transform: rotateY(180deg);
  } */
  .shoe img{
    width: 100%;
  }

</style>
