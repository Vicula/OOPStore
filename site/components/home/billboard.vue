<template>
  <section class="billboard1" v-observe-visibility="visibilityChanged">
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
  import gsap from "gsap"
  export default {
    data:()=>{
      return {
        anim: '',
        isVisible: true
      }
    },
    watch:{
      isVisible(){
        console.log(this.anim.pause())
        if(this.isVisible){this.anim.play()}else{this.anim.pause()}
      }
    },
    mounted(){

        gsap.set(`.billboard1 .row .shoe`, {
          x:(b)=>{
            return b * 250;
          }
        })
      this.anim = gsap.to(`.billboard1 .row .shoe`, 50, {
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
    },
    methods:{
      visibilityChanged (isVisible, entry) {
        this.isVisible = isVisible
        console.log(entry)
      }
    }
  }
</script>
<style>
  .billboard1{
     width:100%;
    height:calc(100vh - 80px);
    background:#111;
    position: relative;
    overflow:hidden;
  }
  .billboard1 .background{
    transform: translate(-9%,0) rotateY(180deg) rotateZ(31deg);
  }
</style>
