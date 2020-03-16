<template>
<div class="cart_item">
            <img  :src="require ('../assets/img/'+cart_item_data.Goods_img)" alt="" width="200" height="200">
            <p class="cart_item__element cart_item__element__name"> {{cart_item_data.Goods_name}}</p>
            <div class="cart_item__element quantity_in_cart">
                <span> Кількість</span>
                <span class="cart_item__quantity">
                    <button @click="quantity_in_cart_plus">+</button>
                    <span>{{cart_item_data.quantity_in_cart}}</span>
                    <button @click="quantity_in_cart_minus">-</button>
                </span>
            </div>
            <div class="cart_item__element">
                <p class="cart_item__price_without_sale">{{price_without_sale(cart_item_data.price,cart_item_data.sale)}}</p>
                <h3>{{goods_price_with_sale(cart_item_data.price, cart_item_data.sale)}} грн</h3>
            </div>
            <div  @click="delete_from_card">
            <img :src="require ('../assets/img/'+url)" alt="" width="23px" height="23px"></div>
</div>
</template>

<script>

export default {
    name: 'cart_item',
    props:{
        cart_item_data:{
            type: Object,
            default(){
              return{}
            }
        }
    },
    data(){
        return{url: 'cross.png'}
    },
    components:{},
    mounted(){
        this.$set(this.cart_item_data, 'quantity_in_cart', 1)
    },
    methods:{
       
        delete_from_card(){
            this.$emit('delete_from_card')
        },
        quantity_in_cart_minus(){
            this.$emit("minus");
        },
        quantity_in_cart_plus(){
            this.$emit("plus");
        },
        goods_price_with_sale(price ,sale){
            return(price-(price*sale))
        },
        price_without_sale(price,sale){ if(sale==0){
            return " ";
        }else{
            return price+" грн"}
        }

    },
}
</script>

<style>
    .cart_item{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: nowrap;
        flex-direction: row;
        width: 100%;
        height: 200px;
        box-shadow: 0 -5px 1px -5px #333;
        margin: 10px 0;
        padding: 30px 0px;
    }
    .cart_item__element{
    padding-top: 30px;
    }
    .cart_item__element__name{
        width: 260px;
    }
    .quantity_in_cart{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .cart_item__quantity button{
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
    }
      .cart_item__quantity span{
          margin: 0px 20px;
      }
    .cart_item__quantity{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        box-shadow: 0px 0px 5px silver;
    }

    .cart_item__price_without_sale{
        text-decoration: line-through;
        color: rgb(2, 156, 156);
    }
</style>