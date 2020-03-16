import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
        state:{
            shop_items:[{
                Goods_name:"Суміш для приклейки пінопласту ADEXBUD",
                Goods_img: "Layer_686.png",
                quantity_of_goods: 5,
                Goods_code:5644,
                price: 1500,
                sale: 0.2},
                {
                Goods_name:"Фасадна акрилова фарба ADEXBUD",
                Goods_img: "Layer_687.png",
                quantity_of_goods: 10,
                Goods_code:5645,
                price: 250,
                sale: 0},
                {
                Goods_name:"Примикання віконне",
                Goods_img: "Layer_688.png",
                quantity_of_goods: 10,
                Goods_code:5646,
                price: 3000,
                sale: 0.2},
                {
                Goods_name:"Грунт глибокого проникнення ADEXBUD",
                Goods_img:"Layer_689.png",
                quantity_of_goods: 100,
                Goods_code:5647,
                price: 400,
                sale: 0},
                {
                Goods_name:"Грунт глибокого проникнення",
                Goods_img: "Layer_690.png",
                quantity_of_goods: 0,
                Goods_code:5648,
                price: 1800,
                sale: 0},
            ],
            cart:[],
            order:[]
    },
        mutations:{
            
            SET_CART:(state, item)=>{
                if (state.cart.length) {
                    let goods_exists =false;
                    state.cart.map(function(prod){
                        if (prod.Goods_code === item.Goods_code) {
                            goods_exists= true;
                            if (item.quantity_of_goods>item.quantity_in_cart) {
                                item.quantity_in_cart++
                            }
                        }
                    })
                    if (!goods_exists & item.quantity_of_goods!=0 ) {
                        state.cart.push(item);
                    }
                } else if(item.quantity_of_goods!=0) {
                    state.cart.push(item);
                }
                
            },
            REMOVE_FORM_CART:(state, index) =>{
                state.cart.splice(index, 1)
            },
            TO_ORDER_CART:(state)=>{
                if (state.cart.length) {
                    state.order.push(state.cart);
                    for (let index = 0; index < state.shop_items.length; index++) {
                        state.cart.pop();
                    }
                } 
            },
            MINUS:(state, index) =>{
                if(state.cart[index].quantity_in_cart > 1){
                state.cart[index].quantity_in_cart--}
            },
            PLUS:(state, index) =>{
                if(state.cart[index].quantity_in_cart < state.cart[index].quantity_of_goods){
                state.cart[index].quantity_in_cart++}
            }
        },
        actions:{
            ADD_TO_CART({commit}, item){
                commit('SET_CART', item);
            },
            DELETE_FORM_CART({commit},index){
                commit('REMOVE_FORM_CART',index)
            },
            TO_ORDER({commit}, item){
                commit('TO_ORDER_CART', item);
            },
            QUANTITY_IN_CART_MINUS({commit},index){
                commit("MINUS",index)
            },
            QUANTITY_IN_CART_PLUS({commit},index){
                commit("PLUS",index)
            }
        },
        getters:{ 
            SHOP_ITEMS(state){
            return state.shop_items;
        },
            CART(state){
                return state.cart;
            }
        }
});
export default store;