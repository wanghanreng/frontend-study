<template>  
  <div class="login">  
    <h1>登录</h1>  
    
    <!-- 已登录状态展示 -->  
    <div v-if="isLoggedIn">  
      <h2>您已登录！</h2>  
      <router-link to="/books">前往书籍列表</router-link>  
    </div>  

    <!-- 登录表单 -->  
    <form v-else @submit.prevent="login">  
      <div>  
        <input v-model="username" type="text" placeholder="用户名" required />  
      </div>  
      <div>  
        <input v-model="password" type="password" placeholder="密码" required />  
      </div>  
      <button type="submit">登录</button>  
    </form>  

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>  
  </div>  
</template>  

<script>  
export default {  
  data() {  
    return {  
      username: '',  
      password: '',  
      errorMessage: '',  
    };  
  },  
  computed: {  
    isLoggedIn() {  
      return localStorage.getItem('isLoggedIn') === 'true';  
    },  
  },  
  methods: {  
    login() {  
      // 模拟登录 
      if (this.username === 'user' && this.password === 'password') {  
        localStorage.setItem('isLoggedIn', true);  
        this.$router.push('/books'); // 登录成功后重定向  
      } else {  
        this.errorMessage = '用户名或密码错误';  
      }  
    },  
  },  
};  
</script>  

<style scoped>    
.login {  
  padding: 20px;  
}  
.error {  
  color: red;  
}  
</style>