<template>  
  <div class="order-info">  
    <h1>订单信息</h1>  
    <div v-if="cartItems.length > 0">  
      <ul>  
        <li v-for="item in cartItems" :key="item.id">  
          {{ item.title }} - ￥{{ item.price }}  
        </li>  
      </ul>  
      <h2>总价格: ￥{{ totalPrice }}</h2>  
      <button class="pay-button">支付</button>  
    </div>  
    <div v-else>  
      <p>您的购物车是空的。</p>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: 'OrderInfo',  
  data() {  
    return {  
      cartItems: [],  
    };  
  },  
  computed: {  
    totalPrice() {  
      return this.cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);  
    },  
  },  
  created() {  
    // 从 localStorage 获取购物车数据  
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];  
  },  
};  
</script>  

<style scoped>  
.order-info {  
  padding: 20px;  
}  

.pay-button {  
  background-color: #3498db;  
  color: white;  
  border: none;  
  padding: 10px 15px;  
  cursor: pointer;  
  font-size: 16px;  
  margin-top: 20px;  
}  

.pay-button:hover {  
  background-color: #2980b9;  
}  
</style>