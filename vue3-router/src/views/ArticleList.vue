<template> 
    <div> 
        <h2>文章列表</h2>  
        <div style="height: 2000px">
            <!-- 占位，模拟长页面 -->
            <p>这是文章列表的内容。</p>  
        </div>  
        <ol>  
            <li v-for="article in articles" :key="article.id">  
                <router-link :to="`/articles/${article.id}`">  
                     {{ article.title }}  
                </router-link>  
            </li>  
        </ol>  
    </div>  
</template>  
  
<script lang="ts" setup>  
const articles = [
    {
        id: 1,
        title: "如何学习 Vue3",
    },
    {
        id: 2,
        title: "理解Vue Router",
    },
];
</script>  
  
<script lang="ts">  
    // beforeRouteEnter 是路由守卫中用于访问 API 的一部分，不应该直接在 <script setup> 中使用  
    export default {  
      beforeRouteEnter(to, from, next) {  
        console.log(to, from);  
        console.log("进入该页面的控制");  
        next();  
      }  
    };  
</script>  
  
<style scoped>
ol li {
    margin-bottom: 10px;
}
a{
    margin: 10px;
    text-decoration: none;
    color: rgb(0, 85, 255);
    padding: 5px 10px;
}
</style>