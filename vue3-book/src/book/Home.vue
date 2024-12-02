<template>  
  <div class="home">  
    <h1>欢迎来到书籍商店</h1>  
    <button @click="logout">登出</button>  
  </div>  
</template>  

<script>  
export default {  
  methods: {  
    logout() {  
      localStorage.removeItem('isLoggedIn');  
      this.$router.push('/'); // 登出后重定向  
    },  
  },  
};  
</script>  

<style scoped>  
/* 简单样式 */  
</style>