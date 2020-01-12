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
    <button @click="addProd">
      Add
    </button>
  </section>
</template>
<script>
export default {
  props:{
    add:{
      type: Function,
      default: ()=>{}
    },
    state:{
      type:Function,
      default:()=>{}
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
  methods:{
    addProd(){
      console.log('iam firing')
      this.add({
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
