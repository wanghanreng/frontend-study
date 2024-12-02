<template>  
    <div>  
        <h3>用户设置</h3>  
        <button @click="logout">退出</button>  
    </div>  
</template>  

<script setup lang="ts">  
import { useRouter } from 'vue-router';  

// 获取路由实例  
const router = useRouter();  

// 退出操作函数  
const logout = () => {   
    localStorage.removeItem('token'); // 示例：清除 token   
    router.push('/login'); // 确保存在登录路由  
};  
</script>  