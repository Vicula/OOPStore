<template>
  <div  @mouseenter="setLoop" @mouseleave="clearLoop" class="prodWrap">
    <!-- <nuxt-link :to="'/product/'+prod._id"> -->
    <transition @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled">
      <div class="prodImg" :style="setGradient">

        <img
          :style="setFilter"
          :src="prod.images[0] ? require('@/assets/'+prod.images[0]+'.png') : 'https://picsum.photos/seed/oop/200/200'"
        >
        <div class="prodInfo">
          <h3>{{ prod.title }}</h3><span>${{ prod.price }}</span>
        </div>
        <div class="prodSwatch">
          <span v-for="(filter,index) in filters" :key="index" @click.prevent.stop="changeFilter(index)" :class="index===activeFilter?'active':''" :style="`background:${filter};`"></span>
        </div>

      </div>
      </transition>
    <!-- </nuxt-link> -->
  </div>
</template>
<script>
export default {

  props:{
    prod:{
      type:Object,
      default:()=>{return {}}
    },
    width:{
      type:Number,
      default:3
    }
  },

  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // },

  data(){
    return{
      filters: {red:'#c6413f',orange:'#f4a45a',yellow:'#fce470',green:'#5d9633',blue:'#5a82be',navy:'#1e4b7c',purple:'#725e97',pink:'#f8d6e6'},
      activeFilter: 'orange',
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
        setFilter:'',
        setGradient: 'background:linear-gradient(0deg,#36D7B7,#F4D03F)',
        interval: '',
        show:false
        // transitionName:'',

    }
  },

  mounted(){
    this.colors = this.shuffle(this.colors)
    // let keys = Object.keys(this.filters)
    // let acFi = keys[ keys.length * Math.random() << 0]
    // this.activeFilter = acFi
    // this.changeFilter(acFi)
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
    enteredScene(){
      this.show = !this.show
    },
    changeFilter(filter){
      this.activeFilter = filter;
      switch(filter){
        case 'pink':
          this.setFilter = 'filter: saturate(170%) contrast(110%) hue-rotate(325deg);'
        break;
        case 'purple':
          this.setFilter = 'filter: saturate(112%) sepia(30%) hue-rotate(245deg);'
        break;
        case 'yellow':
          this.setFilter = 'filter: sepia(75%);'
        break;
        case 'green':
          this.setFilter = 'filter: contrast(90%) hue-rotate(65deg) saturate(130%);'
        break;
        case 'blue':
          this.setFilter = 'filter: hue-rotate(171deg);'
        break;
        case 'navy':
          this.setFilter = 'filter: hue-rotate(44deg) invert(100%);'
        break;
        case 'red':
          this.setFilter = 'filter: hue-rotate(149deg) saturate(55%) invert(1);'
        break;
        case 'orange':
          this.setFilter = ''
        break;

      }
    },

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
    },
    // --------
    // ENTERING
    // --------

    beforeEnter(el) {
      console.log(el,'beforeEnter')
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    enter(el, done) {
      console.log(el,'enter')
      // ...
      done()
    },
    afterEnter(el) {
      console.log(el,'afterEnter')
      // ...
    },
    enterCancelled(el) {
      // ...
    },

    // --------
    // LEAVING
    // --------

    beforeLeave(el) {
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    leave(el, done) {
      // ...
      done()
    },
    afterLeave(el) {
      // ...
    },
    // leaveCancelled only available with v-show
    leaveCancelled(el) {
      // ...
    }
  }
}
</script>
<style scroped lang="scss">
  a{text-decoration: none;}
  .prodSwatch{
     position: absolute;
     bottom:15px;
     right:15px;
     opacity:0;
     transition: all 0.5s;
  }

  .prodSwatch span{
    width:25px;
    height:25px;
    background: yellow;
    display:block;
    border-radius: 100%;
    margin-bottom: 10px;
  }
  .prodSwatch span:hover,.prodSwatch span.active{
    border: solid 2px #111;
  }

  .prodSwatch span:last-child{
    margin-bottom: 0px;
  }

  .prodInfo{
    position: absolute;
     bottom:10px;
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
    line-height: 0px;
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
  .prodWrap{
    cursor: pointer;
  }
  .prodWrap:hover .prodSwatch{
    opacity: 1;
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
