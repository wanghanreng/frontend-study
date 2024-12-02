<template>  
  <div class="book-list">  
    <h1>书籍列表</h1>  
    <ul class="book-items">  
      <li v-for="book in books" :key="book.id" class="book-item">  
        <router-link :to="`/books/${book.id}`">  
          <img :src="book.image" alt="书籍封面" class="book-image" />  
          <div class="book-info">  
            <h2 class="book-title">{{ book.title }}</h2>  
            <p class="book-price">￥{{ book.price }}</p>  
          </div>  
        </router-link>  
      </li>  
    </ul>  
  </div>  
</template>  

<script>  
export default {  
  name: 'BookList',  
  data() {  
    return {  
      books: [  
        { id: 1, title: '斗破苍穹', price: 37.8, image: 'https://t14.baidu.com/it/u=3057383004,3172169992&fm=224&app=112&f=JPEG?w=500&h=500' },  
        { id: 2, title: '斗罗大陆', price: 45.0, image: 'https://t15.baidu.com/it/u=3957483946,702352818&fm=224&app=112&f=JPEG?w=500&h=500' },  
        { id: 3, title: '龙族', price: 55.8, image: 'https://img0.baidu.com/it/u=979023362,3746928428&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625' },   
      ],  
    };  
  },  
};  
</script>  

<style scoped>  
.book-list {  
  padding: 20px;  
}  

.book-list h1 {  
  font-size: 24px;  
  margin-bottom: 20px;  
  text-align: center;  
}  

.book-items {  
  display: flex;  
  flex-wrap: wrap;  
  list-style-type: none;  
  padding: 0;  
  justify-content: center; /* 居中对齐 */  
}  

.book-item {  
  width: 200px;  
  margin: 15px;  
  border: 1px solid #ddd;  
  border-radius: 8px;  
  overflow: hidden;  
  text-align: center;  
  transition: transform 0.2s;  
}  

.book-item:hover {  
  transform: scale(1.05);  
}  

.book-image {  
  width: 100%;  
  height: 300px; /* 统一图片高度 */  
  object-fit: cover; /* 保持图片比例 */  
}  

.book-info {  
  padding: 10px;  
}  

.book-title {  
  font-size: 18px;  
  margin: 10px 0;  
  text-decoration: none; /* 取消下划线 */  
}  

.book-price {  
  font-size: 16px;  
  color: #e74c3c;  
  margin: 0; /* 取消下划线 */  
  text-decoration: none; /* 取消下划线 */  
}  
</style> 