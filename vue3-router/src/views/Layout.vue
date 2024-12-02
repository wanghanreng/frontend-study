<template>
<nav>
    <router-link to="/home">首页</router-link>
    <router-link to="/articleList">文章</router-link>
    <router-link to="/user">我的</router-link>
</nav>
<router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>


<style scoped>
a {  
  margin: 10px;  
  text-decoration: none;   
  color: #3baee0;  
  padding: 5px 10px;   
 }  

.router-link-active {  
  background-color: #3baee0;  
  color: white;
  font-weight: bold;  
}  
</style>