<template>  
  <!-- 导航 -->  
  <nav>  
    <router-link to="/">主页</router-link>  
    <router-link to="/books">书籍列表</router-link>  
    <router-link to="/cart">购物车</router-link>  
    <router-link to="/login">登录</router-link>  
  </nav>  
  
  <!-- 路由对应的组件渲染入口 -->  
  <router-view v-slot="{ Component }">  
    <transition name="fade" mode="out-in">  
      <component :is="Component" />  
    </transition>  
  </router-view>  
</template>  

<script>  
export default {  
  name: 'App'  
};  
</script>  

<style>   
nav {  
  padding: 1em;  
  background: #f2f2f2;  
}  

nav a {  
  margin: 0 10px;  
  text-decoration: none;  
  color: #333;  
}  

nav a.router-link-active {  
  font-weight: bold;  
  color: #42b983;  
}  

.fade-enter-active, .fade-leave-active {  
  transition: opacity 0.5s;  
}  
.fade-enter, .fade-leave-to {  
  opacity: 0;  
}  
</style>