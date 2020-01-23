<template>
  <div @mouseenter="setLoop" @mouseleave="clearLoop" class="prodWrap">
    <nuxt-link :to="'/product/'+prod._id">
      <div class="prodImg" :style="setGradient">
        <img
          :src="prod.images[0] ? require('@/assets/'+prod.images[0]+'.png') : 'https://picsum.photos/seed/oop/200/200'"
        >
        <div class="prodInfo">
          <h3>{{ prod.title }}</h3><span>${{ prod.price }}</span>
        </div>
      </div>

    </nuxt-link>
  </div>
</template>
<script>

export default {

  props:{
    prod:{
      type:Object,
      default:()=>{return {}}
    }
  },

  data(){
    return{
      colors: [
        [62,35,255],
        [60,255,60],
        [255,35,98],
        [45,175,230],
        [255,0,255],
        [255,128,0]],
        step: 0,
        colorIndices: [0,1,2,3],
        gradientSpeed: 0.002,
        setGradient: 'background:linear-gradient(0deg,#36D7B7,#F4D03F)',
        interval: ''
    }
  },

  mounted(){
    this.colors = this.shuffle(this.colors)
    let c0_0 = this.colors[this.colorIndices[0]]
    let c0_1 = this.colors[this.colorIndices[1]]
    let c1_0 = this.colors[this.colorIndices[2]]
    let c1_1 = this.colors[this.colorIndices[3]]

    let istep = 1 - this.step
    let r1 = Math.round(istep * c0_0[0] + this.step * c0_1[0])
    let g1 = Math.round(istep * c0_0[1] + this.step * c0_1[1])
    let b1 = Math.round(istep * c0_0[2] + this.step * c0_1[2])
    let color1 = "rgba("+r1+","+g1+","+b1+",0.6)"

    let r2 = Math.round(istep * c1_0[0] + this.step * c1_1[0])
    let g2 = Math.round(istep * c1_0[1] + this.step * c1_1[1])
    let b2 = Math.round(istep * c1_0[2] + this.step * c1_1[2])
    let color2 = "rgba("+r2+","+g2+","+b2+",0.6)"

    this.setGradient = 'background:linear-gradient('+r1+'deg,'+color1+','+color2+')'
  },

  methods:{
    setLoop(){this.interval = setInterval(this.updateGradient, 8)},
    clearLoop(){clearInterval(this.interval)},
    updateGradient(){

      let c0_0 = this.colors[this.colorIndices[0]]
      let c0_1 = this.colors[this.colorIndices[1]]
      let c1_0 = this.colors[this.colorIndices[2]]
      let c1_1 = this.colors[this.colorIndices[3]]

      let istep = 1 - this.step
      let r1 = Math.round(istep * c0_0[0] + this.step * c0_1[0])
      let g1 = Math.round(istep * c0_0[1] + this.step * c0_1[1])
      let b1 = Math.round(istep * c0_0[2] + this.step * c0_1[2])
      let color1 = "rgba("+r1+","+g1+","+b1+",0.6)"

      let r2 = Math.round(istep * c1_0[0] + this.step * c1_1[0])
      let g2 = Math.round(istep * c1_0[1] + this.step * c1_1[1])
      let b2 = Math.round(istep * c1_0[2] + this.step * c1_1[2])
      let color2 = "rgba("+r2+","+g2+","+b2+",0.6)"

      this.setGradient = 'background:linear-gradient('+r1+'deg,'+color1+','+color2+')'

      this.step += this.gradientSpeed

      if ( this.step >= 1 ){
        this.step %= 1
        this.colorIndices[0] = this.colorIndices[1]
        this.colorIndices[2] = this.colorIndices[3]


        this.colorIndices[1] = ( this.colorIndices[1] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length
        this.colorIndices[3] = ( this.colorIndices[3] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length
      }
    },
    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }
}
</script>
<style>
  a{text-decoration: none;}
  .prodInfo{
    position: absolute;
     bottom:15px;
     left:15px;
    font-family: "Arial Black", Gadget, sans-serif;
    color: black;
    text-decoration: none;
    opacity:0;
    transition: all 0.5s;
  }

  .prodInfo h3{
    font-size: 24px;
  }

  .prodInfo span{
    font-size: 14px;
    opacity:0.7;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
  }

  .prodImg{
    width:100%;
    padding-top: 100%;
    display:flex;
    align-items: center;
    position: relative;
  }
  .prodImg img{
    width:66%;
    margin:auto;
    transform: translatey(0px);
    z-index: 2;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    filter: hue-rotate(30deg);
  }
  .prodImg::before{
    content: '';
    display:block;
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.6);
    width: 56%;
    height: 7px;
    background: transparent;
    position: absolute;
    left: 50%;
    top:58%;
    border-radius: 100%;
    transform: translate(-50%,-50%);
    z-index: 1;
    transition-duration: 1s
  }
  .prodWrap:hover .prodImg img{
    animation: float 3s ease-in-out infinite;
  }
  .prodWrap:hover .prodImg::before{
    animation: floatShad 3s ease-in-out infinite;
  }
  .prodWrap:hover .prodInfo{
    opacity: 1;
  }

  @keyframes floatShad {
    0% {
      box-shadow: 0 25px 15px 0px rgba(0,0,0,0.6);
      /* top:60%; */
      width:56%;
    }
    50% {
      box-shadow: 0 35px 15px 0px rgba(0,0,0,0.2);
      /* top:70%; */
      width:45%;
    }
    100% {
      box-shadow: 0 25px 15px 0px rgba(0,0,0,0.6);
      /* top:60%; */
      width:56%;
    }
  }

  @keyframes float {
    0% {
      /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
      top:50%;
    }
    50% {
      /* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
      top:45%;
    }
    100% {
      /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
      top:50%;
    }
  }
</style>
