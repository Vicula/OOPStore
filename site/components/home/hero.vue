<template>
  <section class="hero">
    <div class="foreground"><h1>Find what<br/>Moves you</h1></div>
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
            return b * 250;
          }
        })
        // let myx
        // if(i == 2){myx = '-=2000'}else{myx = '+=2000'}
        gsap.to(`.row${i} .shoe`, 50, {
          ease: 'none',
          x: '+=2000', //move each box 500px to right
          modifiers: {
            x:(x)=>{
              let rt = parseInt(x) % 2000
              return rt + 'px'
            }
          },
          repeat: -1
        })
      }
    },
  }
</script>
<style>
  .hero{
    width:100%;
    height:calc(100vh - 80px);
    background:#111;
    position: relative;
    max-height: 700px;
    overflow:hidden;
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
    transform: rotateZ(20deg);
    opacity: 0.4;
  }

  .shoe{
    position:absolute;
    width:200px;
  }
  .row2 {
    transform: translate(-50%,0) rotateY(180deg);
  }
  .shoe img{
    width: 100%;
  }

  .foreground{
    position: absolute;
    z-index: 1;
    left: 20%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .foreground h1{
    font-size: 60px;
    font-size: 72px;
    color:White;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: -webkit-linear-gradient(#eee, #555);
     -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

</style>
