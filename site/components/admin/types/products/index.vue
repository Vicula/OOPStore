<template>
  <section class="productsDisplay">
    <newProduct
      v-if="newProd"
      :state="()=>{newProd=false;fetchItems()}"
      :add="addItem()"
      :schema="schema.schema"
    />
    <productList
      v-else-if="!editing"
      :products="items"
      :submit="()=>{newProd=true}"
      :edit="startEdit"
    />
    <editProduct
      v-else
      :state="()=>{editing=false;fetchItems()}"
      :prod="prod"
      :update="updateItem()"
      :delete-prod="deleteIt()"
      :schema="schema.schema"
    />
  </section>
</template>
<script>
import newProduct from './newProduct'
import productList from './productList'
import editProduct from './editProduct'

export default {
  components:{
    newProduct,
    productList,
    editProduct
  },

  props:{
    schema:{
      type: Object,
      default: ()=>{return{}}
    },
    route:{
      type:String,
      default:'produtGrid'
    }
  },

  data: () => {
    return {
      newProd: false,
      editing: false,
      prod: {},
      items: []
    }
  },
  mounted(){
    this.fetchItems()
    console.log('I AM MOUNTING')
  },

  methods:{
    fetchItems(){
      let vm = this
      this.$store._actions[this.route+'/fetch'][0]().then(()=>{
        console.log('this is the mount fetch',this.$store.state[this.route].items)
        vm.items = this.$store.state[this.route].items
      })
    },
    updateItem(){return this.$store._actions[this.route+'/update'][0]},
    addItem(){return this.$store._actions[this.route+'/add'][0]},
    deleteIt(){return this.$store._actions[this.route+'/deleteItem'][0]},
    startEdit(d){
      this.prod = d
      this.editing = true
    }
  }
}
</script>
<style scroped lang="scss">

.productsDisplay{
  padding:50px;
}

input{
  width: 250px;
  padding: 5px;
  margin-bottom: 15px;
}

</style>
