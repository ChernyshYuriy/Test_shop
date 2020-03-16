<template>
    <div class="main_wrapper" >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </div>
</template>

<script>


export default {
  name:"main_wrapper",
  props:{},
    computed:{
  },
   data(){return{}
   }
   
}
</script>

<style>
#main_wrapper{
  display: flex;
  flex-direction: row;
  margin: 20px 5%;
}
.price_without_sale{
        text-decoration: line-through;
        color: rgb(2, 156, 156);
    }



</style>