<template>  
    <div>  
      <h2>知乎热榜</h2>
      <button @click="addNewHotItem">添加热榜数据</button>
      <ul>  
        <li v-for="item in pageHotList" :key="item.id">  
          <img :src="item.image" alt="image" />  
          <h3>{{ item.title }}</h3>  
          <p>{{ item.excerpt }}</p>  
          <p>热度：{{ item.hotIndex }}</p>  
          <!-- <a :href="item.url" target="_blank">查看详情</a>   -->
          <button @click="updateOldHotItem(item.id)">更新</button>
          <button @click="removeHotItem(item.id)">删除</button>
          <hr />  
        </li>  
      </ul>  

      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>  
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
    </div>  
</template>

<script setup lang="ts">  
import { computed, onMounted, ref } from "vue";  
import { 
    fetchHotList, 
    addHotItem, 
    updateHotItem, 
    deleteHotItem, 
 } from '../api/zhihuApi' 
import type { HotItem } from "../types/zhihu";  

const hotList = ref<HotItem[]>([]);  
const currentPage = ref(1);
const pageSize = ref(2);

const fetchList = async () => {  
  const res = await fetchHotList();  
  hotList.value = res.data.data;  
};  

//增删改查
const addNewHotItem = async () => {  
  const newItem = {  
    title: "新的热门数据",  
    excerpt: "这是一个新增的热榜项",  
  };  
  const res = await addHotItem(newItem);  
  console.log(res.data.message);  
  hotList.value.unshift(res.data.data);  
};

const updateOldHotItem = async (id: number) => {  
  const updatedItem = {  
    title: "更新后的标题",  
    excerpt: "更新后的内容",  
  };  
  const res = await updateHotItem(id, updatedItem);
  console.log(res.data.message);  
  
  const itemIndex = hotList.value.findIndex((item) => item.id === id);  
  if (itemIndex !== -1) {  
    hotList.value[itemIndex].title = updatedItem.title;  
    hotList.value[itemIndex].excerpt = updatedItem.excerpt;  
  }  
};

const removeHotItem = async (id: number) => {  
  const res = await deleteHotItem(id);  
  console.log(res.data.message);  
  // 从列表中移除  
  hotList.value = hotList.value.filter(item => item.id !== id);  
};

const pageHotList = computed(() => 
    hotList.value.slice(
        (currentPage.value - 1) * pageSize.value,
        currentPage.value * pageSize.value
    )
);

// 计算总页数  
const totalPages = computed(() => 
  Math.ceil(hotList.value.length / pageSize.value) 
);  

// 下一页事件  
const nextPage = () => {  
  if (currentPage.value < totalPages.value) {  
    currentPage.value += 1;  
  }  
};  

// 上一页事件  
const prevPage = () => {  
  if (currentPage.value > 1) {  
    currentPage.value -= 1;  
  }  
};

onMounted(fetchList);  
</script>

<style scoped></style>