<template>
  <section class="newProd">
    <div>
      <input
        v-model="title"
        type="text"
        placeholder="Title"
        name="title"
      >
    </div>
    <!-- <div>
      <input
        v-model="handle"
        type="text"
        placeholder=""
        name="email"
      >
    </div> -->
    <div>
      <input
        v-model="desc"
        type="textarea"
        placeholder="Description"
        name="Description"
      >
    </div>
    <div>
      <input
        v-model="sku"
        type="text"
        placeholder="SKU"
        name="sku"
      >
    </div>
    <div>
      <input
        v-model="price"
        type="number"
        placeholder="Price"
        name="price"
      >
    </div>
    <div>
      <input
        v-model="vendor"
        type="text"
        placeholder="Vendor"
        name="vendor"
      >
    </div>
    <div>
      <input
        v-model="productType"
        type="text"
        placeholder="Product Type"
        name="Product Type"
      >
    </div>
    <div>
      <input
        v-model="image"
        type="text"
        placeholder="Image"
        name="image"
      >
    </div>
    <button @click="updateProd">
      update
    </button><br><br><br><button @click="delProd">
      Delete
    </button>
  </section>
</template>
<script>
export default {
  props:{
    deleteProd:{
      type: Function,
      default: ()=>{}
    },
    update:{
      type: Function,
      default: ()=>{}
    },
    state:{
      type:Function,
      default:()=>{}
    },
    prod:{
      type:Object,
      default:()=>{return{}}
    }
  },

  data: () => {
    return {
      title:'',
      handle:'',
      desc:'',
      sku:'',
      price:'',
      vendor:'',
      productType:'',
      image:''
    }
  },
  mounted(){
    this.title = this.prod.title
    this.desc = this.prod.desc
    this.sku = this.prod.sku
    this.price = this.prod.price
    this.vendor = this.prod.vendor
    this.productType = this.prod.productType
    this.images = this.prod.images
  },
  methods:{
    updateProd(){
      console.log('iam firing')
      this.update({
        _id:this.prod._id,
        title:this.title,
        // handle:this.handle,
        desc:this.desc,
        sku:this.sku,
        price:this.price,
        vendor:this.vendor,
        productType:this.productType,
        images:[this.image]
      })
      this.state()
    },
    delProd(){
      this.deleteProd(this.prod)
      this.state()
    }
  }
}
</script>
<style>

input{
  width: 250px;
  padding: 5px;
  margin-bottom: 15px;
}

</style>
