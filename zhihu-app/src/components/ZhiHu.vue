<template>  
  <div class="container">  
    <div v-for="(item, index) in list" :key="index" class="card">  
      <div class="left">  
        <img :src="item.bannerurl" alt="" />  
      </div>  
      <div class="right">  
        <h3>{{ item.title }}</h3>  
        <p>  
          <span v-for="tag in item.tags" :key="tag.tagid" class="section">  
            {{ tag.sectiontitle }}  
          </span>  
        </p>  
        <p class="updated">  
          {{ TimeUtil.format(item.updated, "YYYY-MM-DD") }}  
        </p>  
        <span>{{ item.view_count }} 次浏览</span>  
      </div>  
      <div v-if="item.isfollowing === 1" class="follow followed">已关注</div>  
      <span v-else class="follow unfollow">关注</span>  
    </div>  
  </div>  
</template>  

<script setup lang="ts">  
import { ref } from "vue";  
import axios from "axios";  
import TimeUtil from "../utils/timeUtil";  

interface Tags {  
  tagid: number;  
  sectiontitle: string;  
  sectionid: number;  
  topicid: number;  
}  

interface Topics {  
  topicid: number;  
  title: string;  
  view_count: number;  
  followers_count: number;  
  isfollowing: number;  
  introduction: string;  
  bannerurl: string;  
  updated: number;  
  tags: Tags[];  
}  

const list = ref<Topics[]>([]);  

axios({  
  url: "http://localhost:8080/api/v1/special/all", // 确保 URL 正确  
})  
.then((res) => {  
  const data = res.data.data;  
  list.value = data.map((item: { viewcount: string; }) => {  
    // 将 view_count 转换为数字  
    const viewCount = parseInt(item.viewcount, 10) || 0; // 使用 item.viewcount  
    return {  
      ...item,  
      view_count: viewCount,  
    };  
  });  
  console.log("Received data:", list.value); // 调试信息  
})  
.catch((err) => {  
  console.error("Error fetching data:", err);  
});
</script>  

<style scoped>  
.container {  
  width: 70%;  
  margin: 0 auto;  
}  
.card {  
  display: flex;  
  height: 180px;  
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
.updated {  
  margin-right: 20px;  
}  
.follow {  
  position: absolute;  
  right: 20px;  
  top: 20px;  
  padding: 5px 10px;  
  font-size: 14px;  
}  
.followed {  
  background-color: #f6f6f6;  
  color: #716c6c;  
}  
.unfollow {  
  background-color: #eff4fe;  
  color: #36700e;  
}  
.section {  
  padding: 3px 8px;  
  margin-right: 10px;  
  border-radius: 4px;  
  background-color: #7d7d7d;  
  color: #fff;  
}  
</style>