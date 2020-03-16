<template>    
<div class="catalog_items">

    <div class="app__shop_element">
        <img :src="require ('../assets/img/'+shop_data.Goods_img)" alt="" width="200" height="200">
        <p class="app__shop_element__goods_name">{{shop_data.Goods_name}}</p>
        <div :class="class_for_quantity(shop_data.quantity_of_goods)">{{availability_of_goods(shop_data.quantity_of_goods)}}</div>
        <p class="app__shop_element__goods_code">Код товару: {{shop_data.Goods_code}}</p>
        <div class="app__shop_element__sale">{{sale_for_Googs(shop_data.sale)}}</div>
        <p class="app__shop_element__price"> 
            <span class="app__shop_element_price_sale">{{goods_price(shop_data.price, shop_data.sale)}}</span> 
            {{goods_price_with_sale_in_catalog(shop_data.price, shop_data.sale)}} грн</p>
        <button 
        :class="button_disabling(shop_data.quantity_of_goods)"
        @click="add_to_cart">
        Купити 
        </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'catalog_items',
  props:{
      shop_data:{
          type: Object,
          default(){
              return{}
          }
      }
  },
  components:{
  },
  data(){
      return{}
  },
  methods:{
            sale_for_Googs:function(sale){
                if(sale!=0){
                    return "Знижка " + sale*100 + " % ";
                }
            },
            availability_of_goods(quantity_of_goods) {
                if(quantity_of_goods>0){
            return"В наявності";
                }
                else{
                    return "Немає в наявносі"
                }
            },
            button_disabling(quantity_of_goods) {
                if(quantity_of_goods>0){
            return "button_corect"
                }
                else{
                    return "button_disable";
                }
            },
            class_for_quantity(quantity_of_goods){
                if(quantity_of_goods>0){
            return "app__shop_element_green"
                }
                else{
                    return "app__shop_element_red";
                }
            },
            add_to_cart(){
                this.$emit('add_to_cart',this.shop_data);
            },
            goods_price_with_sale_in_catalog(price ,sale){
            return(price-(price*sale))
            },
            goods_price(price, sale){
                if(sale!==0){
                    return price +" грн"
                }else{
                    return "";
                }
            }

        },
}


</script>

<style>
.app__shop_element{
  width: 250px;
  height: 500px;
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;
  margin: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

  .app__shop_element:hover , .catalog_basked:hover{
   transition: box-shadow 0.3s ease-in-out; 
  box-shadow: 0px 5px 14px rgb(121, 121, 121);
  }

  .app__shop_element img{
margin: auto
}
.app__shop_element div>img{
  margin: 0px 10px;
}


button{
  width: 240px;
  height: 26px;
  border-radius: 5px;
  border: 0px;

}
.button_corect{
  box-shadow: 1px 2px 0 #030935;
  background-color: #131d5f;
    color: white;
}
.app__shop_element__goods_name, .app__shop_element__price{
    font-size: 20px;
}
.button_disable{
  box-shadow: 1px 2px 0 silver;
  background-color: silver;
    color: black;
}
.app__shop_element_red{
    color: red;

}
.app__shop_element_green{
    color: green;
}
.app__shop_element__goods_code{
    color: rgb(0, 107, 107);
}
.app__shop_element__sale,.app__shop_element_green,.app__shop_element_red,.app__shop_element__goods_code{
        font-size: 16px;
}
.app__shop_element__sale{
    color: rgb(75, 0, 0);
}
.app__shop_element_price_sale{
        text-decoration: line-through;
        color: rgb(2, 156, 156);
}

</style>