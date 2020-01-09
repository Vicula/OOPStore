<template>
  <section class="productsDisplay">
    <newProduct v-if="newProd" :state="()=>{newProd=false}" :add="addProduct" />
    <productList :products="safeProducts" :submit="()=>{newProd=true}" :edit="startEdit" v-else-if="!editing" />
    <editProduct v-else :state="()=>{editing=false}" :prod="prod" :update="updateProduct" :deleteProd="deleteProduct" />
  </section>
</template>
<script>
import newProduct from './newProduct'
import productList from './productList'
import editProduct from './editProduct'
import {mapActions,mapState} from 'vuex'

export default {
  components:{
    newProduct,
    productList,
    editProduct
  },

  data: () => {
    return {
      newProd: false,
      editing: false,
      prod: {}
    }
  },

  methods:{
    ...mapActions('productGrid',['addProduct','fetchProducts','updateProduct','deleteProduct']),
    fetch(){
      this.fetchProducts()
    },
    startEdit(d){
      this.prod = d
      this.editing = true
    }
  },
  computed:{
    ...mapState('productGrid',['safeProducts'])
  },
  mounted(){
    this.fetch()
  }
}
</script>
<style>

.productsDisplay{
  padding:50px;
}

input{
  width: 250px;
  padding: 5px;
  margin-bottom: 15px;
}

</style>
