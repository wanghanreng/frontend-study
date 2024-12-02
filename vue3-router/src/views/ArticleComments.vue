<template>  
    <ul>  
        <li v-for="comment in article.comments" :key="comment.id">  
            {{ comment.content }}  
        </li>  
    </ul>  
</template>  

<script setup lang="ts">  
import { useRoute } from 'vue-router';  

const route = useRoute();  
const articleId = Number(route.params.id); // 确保转换为数字  

const articles = [  
    {  
        id: 1,  
        title: "如何学习Vue3",  
        content: "如何学习 如何学习",  
        comments: [  
            { id: 1, content: "Vue3 语法很简洁" },  
            { id: 2, content: "Vue3 语法很强大" },  
            { id: 3, content: "Vue3 组合函数很棒" },  
            { id: 4, content: "Vue3 生态很好" }  
        ]  
    },  
    {  
        id: 2,  
        title: "理解Vue-Route",  
        content: "理解Vue-Route",  
        comments: [  
            { id: 1, content: "Vue Router?基础与静态路由" },  
            { id: 2, content: "动态路由与嵌套路由" },  
            { id: 3, content: "路由守卫与编程式导航" },  
            { id: 4, content: "路由懒加载、滚动行为与过渡动面" }  
        ]  
    }  
];  

const article = articles.find(a => a.id === articleId); // 查找对应的文章  
</script>  

<style scoped>  
</style>