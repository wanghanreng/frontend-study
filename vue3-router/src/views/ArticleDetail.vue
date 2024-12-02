<template>  
  <div>  
      <h2>{{ article.title }}</h2>  
      <p>{{ article.content }}</p>  
      <router-link :to="`/articles/${article.id}/comments`">查看评论</router-link>  
      <router-view></router-view> <!-- 正确使用 router-view -->  
  </div>  
</template>  

<script setup lang="ts">  
import { useRoute } from 'vue-router';  

const route = useRoute();  
const articleId = Number(route.params.id); // 确保转换为数字  

const articles = [ // 文章列表  
  {  
      id: 1,  
      title: "如何学习Vue3",  
      content: "如何学习 如何学习"  
  },  
  {  
      id: 2,  
      title: "理解Vue-Route",  
      content: "理解Vue-Route"  
  }  
];  

const article = articles.find(a => a.id === articleId);  
</script>  

<style scoped>  
</style>