<template>  
    <div class="container">  
      <div v-for="(item, index) in paginatedList" :key="item.id" class="card">  
        <div class="left">  
          <img :src="item.banner" alt="" />  
        </div>  
        <div class="right">  
          <h3>{{ item.title }}</h3>  
          <p>  
            <span class="updated">{{ item.updated }}</span>  
            <span>{{ item.viewCount }} 次浏览</span>  
          </p>  
        </div>  
        <span   
          @click="toggleFollow(item)"   
          :class="item.isFollowing === 'TRUE' ? 'follow followed' : 'follow unfollow'"  
        >  
          {{ item.isFollowing === 'TRUE' ? '已关注' : '关注' }}  
        </span>  
      </div>  
      
      <div class="pagination">  
        <button @click="prevPage" :disabled="currentPage === 1">上一页</button>  
        <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>  
      </div>  
    </div>  
</template>  

<script setup lang="ts">  
import { ref, computed } from "vue";  
import axios from "axios";  

interface Special {  
    id: string;  
    title: string;  
    banner: string;  
    introduction: string;  
    isFollowing: string;  
    followersCount: number;  
    viewCount: number;  
    updated: string;  
}  

const list = ref<Special[]>([]);  
const currentPage = ref(1);  
const itemsPerPage = 5;  

axios({  
    url: "http://localhost:8080/api/v1/special/all"  
}).then((res) => {  
   list.value = res.data.data as Special[];  
   console.log(list.value);  
});  

// 计算总页数  
const totalPages = computed(() => {  
    return Math.ceil(list.value.length / itemsPerPage);  
});  

// 计算当前页的列表  
const paginatedList = computed(() => {  
    const start = (currentPage.value - 1) * itemsPerPage;  
    const end = start + itemsPerPage;  
    return list.value.slice(start, end);  
});  

// 切换关注状态  
const toggleFollow = (item: Special) => {  
    item.isFollowing = item.isFollowing === 'TRUE' ? 'FALSE' : 'TRUE';  
};  

// 下一页和上一页的函数  
const nextPage = () => {  
    if (currentPage.value < totalPages.value) {  
        currentPage.value++;  
    }  
};  

const prevPage = () => {  
    if (currentPage.value > 1) {  
        currentPage.value--;  
    }  
};  
</script>  

<style scoped>  
.container {  
    width: 70%;  
    margin: 0 auto;  
}  

.card {  
    display: flex;  
    height: 160px;  
    margin-bottom: 15px;  
    border: 1px solid #ccc;  
    box-shadow: 10px 5px 5px #ddd;  
    border-radius: 8px;  
    position: relative;  
}  

.left {  
    flex: 1;  
}  

.right {  
    flex: 4;  
    padding: 10px;  
}  

.left img {  
    width: 100%;  
    height: 100%;  
    border-top-left-radius: 8px;  
    border-bottom-left-radius: 8px;  
}  

p span {  
    font-size: 13px;  
    color: #333;  
}  

.updated {  
    margin-right: 20px;  
}  

.follow {  
    position: absolute;  
    right: 20px;  
    top: 20px;  
    padding: 5px 10px;  
    font-size: 14px;  
    cursor: pointer; /* 添加指针光标以指示可点击 */  
}  

.followed {  
    background-color: #f6f6f6;  
    color: #716c6c;  
}  

.unfollow {  
    background-color: #eff4fc;  
    color: #3670ee;  
}  

.pagination {  
    display: flex;  
    justify-content: space-between;  
    margin-top: 20px;  
}  
</style>