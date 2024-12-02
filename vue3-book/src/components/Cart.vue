<template>  
  <div class="cart-container">  
    <h1 class="cart-title">购物车</h1>  
    <router-view></router-view> <!-- 显示子路由内容 -->  
    <router-link to="/cart/orders" class="order-link">查看订单信息</router-link>  
  </div>  
</template>  

<script>  
export default {  
  name: 'Cart',  
};  
</script>  

<style scoped>  
.cart-container {  
  padding: 20px;  
}  

.cart-title {  
  font-size: 32px;  
  text-align: center;  
  margin-bottom: 20px;  
}  

.order-link {  
  display: block;  
  text-align: center;  
  margin: 20px 0;  
  color: #007bff;  
  text-decoration: none;  
}  
</style>