<template>
<div class="catalog">
    <router-link class="catalog_basked"
      :to="{name:'cart', params: {cart_data: CART}}">
      <h5 class="catalog__quantity_goods_in_cart">{{CART.length}}</h5>
      <img :src="require ('../assets/img/'+url)" alt="">     
    </router-link>
    <div class="catalog__elements">
        <catalog_items 
        v-for="item in SHOP_ITEMS" 
        :key="item.Goods_code" 
        :shop_data='item'
        @add_to_cart="add_to_cart"></catalog_items>  
    </div>
</div>
</template>

<script>

import catalog_items from '../components/catalog_items'
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'catalog',
  data(){
      return{
        url:'shopping-basket.png'
        }
        },
  components:{
      catalog_items

  },
  computed:{
          ...mapGetters([
            'SHOP_ITEMS',
            'CART'
      ])
  },
  methods:{
    ...mapActions([
      'ADD_TO_CART'
    ]),
    add_to_cart(data){
      this.ADD_TO_CART(data);
    }
  }  
        
}
</script>

<style>
.catalog{
    display: flex;
    flex-direction: column;
}
.catalog__elements{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
  .catalog_basked{
    position: relative;
    display: flex;
    width: 70px;
    height: 70px;
    padding: 5px;
    border-radius: 10px;
    justify-self: flex-end;
    align-self: flex-end;
    margin: 15px 30px;
  }
  .catalog_basked img{
    margin: auto;
    width: 60px;
    height: 60px;
  }
  .catalog__quantity_goods_in_cart{
    position: absolute;
    display: flex;
    text-align: end;
    justify-content: center;
    align-self: center;
    align-items: center;
    background-color: blue;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: white;
  }

</style>