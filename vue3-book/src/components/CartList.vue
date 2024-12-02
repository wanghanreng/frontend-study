<template>  
  <div class="cart-list">  
    <h2 class="list-title">购物车列表</h2>  
    <ul class="book-list">  
      <li v-for="book in cartItems" :key="book.id" class="cart-item">  
        <img :src="book.image" alt="书籍封面" class="book-image" />  
        <div class="book-details">  
          <h3 class="book-title">{{ book.title }}</h3>  
          <button @click="removeFromCart(book.id)" class="remove-button">删除</button>  
        </div>  
      </li>  
    </ul>  
    <p v-if="cartItems.length === 0" class="empty-cart">购物车为空</p>  
  </div>  
</template>  

<script>  
export default {  
  data() {  
    return {  
      cartItems: [],  
    };  
  },  
  created() {  
    this.loadCartItems();  
  },  
  methods: {  
    loadCartItems() {  
      const items = JSON.parse(localStorage.getItem('cartItems')) || [];  
      this.cartItems = items;  
    },  
    removeFromCart(itemId) {  
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);  
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));  
    },  
  },  
};  
</script>  

<style scoped>  
.cart-list {  
  padding: 20px;  
}  

.list-title {  
  font-size: 24px;  
  margin-bottom: 15px;  
}  

.book-list {  
  list-style-type: none;  
  padding: 0;  
}  

.cart-item {  
  display: flex;  
  align-items: center;  
  border: 1px solid #ddd;  
  border-radius: 8px;  
  padding: 10px;  
  margin: 10px 0;  
}  

.book-image {  
  width: 80px;  
  height: 120px;  
  object-fit: cover;  
  margin-right: 15px;  
}  

.book-details {  
  flex-grow: 1;  
}  

.book-title {  
  font-size: 18px;  
  margin: 0;  
}  

.remove-button {  
  background-color: #e74c3c;  
  color: white;  
  border: none;  
  border-radius: 5px;  
  padding: 5px 10px;  
  cursor: pointer;  
}  

.remove-button:hover {  
  background-color: #c0392b;  
}  

.empty-cart {  
  text-align: center;  
  color: #888;  
}  
</style>