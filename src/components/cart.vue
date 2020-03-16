<template>
<div class="cart">
    <div class="cart__header">
        <h2>Корзина</h2>
      <router-link class="router-link"
      :to="{name:'catalog'}">
        <img :src="require ('../assets/img/'+url)" alt="">
      </router-link>
    </div>
    <cart_item
        v-for="(item, index) in cart_data"
        :key="item.Goods_code"
        :cart_item_data="item"
        @delete_from_card="delete_from_card(index)"
        @minus="minus(index)"
        @plus="plus(index)"></cart_item>

        <div class="cart__back_to_catalog_footer">
          <router-link class="cart__router-link"
          :to="{name:'catalog'}">
          <p>Повернутися до покупок</p> 
          </router-link>
          <p class="cart__free_delivery">{{free_delivery(cart_total_cost)}}</p>
        </div>
        <div class="cart__footer">
          <p>{{cart__total_sale(cart_total_cost)}}</p>
          <p>{{cart__total_bonus_sale(cart_total_cost)}}</p>
          <h2>Всього: {{cart_total_cost}} грн</h2>
          <button @click="to_order()">Оформити</button>
        </div>
</div>
</template>

<script>

import cart_item from './cart_item'
import {mapActions} from 'vuex'

export default {
  name: 'card',
  props: {
     cart_data: {
       type: Array,
       default() {
         return {}
       }
     }
   },
   computed:{
     cart_total_cost(){
       let result = [];
       if(this.cart_data.length!==0){
       for(let i of this.cart_data){
         result.push((i.price-(i.price*(i.sale))) * i.quantity_in_cart)
       }
       result =result.reduce(function(sum, el){
         return sum + el;
       })
       return result;
       }
       else{let cart_empty_massage =["0"];
         return cart_empty_massage[0];
       }
     }
  },
  components:{
      cart_item
  },
  data(){
      return{
        url: 'cross.png'
      }
  },
  methods:{
      ...mapActions([
          'TO_ORDER',
          'DELETE_FORM_CART',
          'QUANTITY_IN_CART_MINUS',
          'QUANTITY_IN_CART_PLUS'
      ]),
      to_order(){
        this.TO_ORDER()
      },
      delete_from_card(index){
          this.DELETE_FORM_CART(index)
      },
      minus(index){
          this.QUANTITY_IN_CART_MINUS(index)
      },
      plus(index){
          this.QUANTITY_IN_CART_PLUS(index)
      },
      free_delivery(total_cost){
          if(total_cost>1000){
            return "Доставка вашого замовлення безкоштовна"
          }else{
            " "
          }
      },
      cart__total_sale(total_cost){
        if(total_cost>=4000){
            return "Ваша знишка " + total_cost*0.1 + " грн";
          }else{
            return " "
          }
      },
      cart__total_bonus_sale(total_cost){
        if(total_cost>=5000){
            return "Ваша бонусна знишка " + total_cost*0.1*1 + " грн";
          }else{
            return " "
          }
      }



  }

}

</script>

<style>
    .cart{
      width: 60%;
      margin: 150px auto;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.493);
      border-radius: 5px;
    }
    .cart__header{
      display: flex;
      justify-content: space-between;
      padding: 30px;
    }
    .cart__header .router-link img {
      width: 40px;
      height: 40px;
    }
    .cart__router-link{
      text-decoration: none;
      color: black;
    }
    .cart__back_to_catalog_footer{
      display: flex;
      justify-content: space-between;
      box-shadow: 0 -5px 1px -5px #333;
    }
    .cart__router-link, .cart__free_delivery{
      padding: 0px 20px;
    }
    .cart__free_delivery{
      color: green;
    }
    .cart__footer{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0px 50px 60px;
    }
    .cart__footer button{
      width: 200px;
      height: 50px;
      font-size: 24px;
      background-color: rgb(1, 1, 136);
      color: white;
    }

</style>