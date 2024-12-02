<template>
    <div>
        <nav>
            <router-link to="/user/profile">用户信息</router-link>
            <router-link to="/user/setting">用户设置</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
nav {  
    margin-top: 20px;  
}  
/* 定义路由导航样式 */
a {  
    margin: 10px;  
    text-decoration: none;  
    color: #469c85;  
    padding: 5px 10px;  
}  

.router-link-active {  
    background-color: #469c85;  
    color: white;  
    font-weight: bold;  
}
</style>