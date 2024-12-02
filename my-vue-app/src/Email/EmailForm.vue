<template>  
    <div>  
      <form @submit.prevent="submitForm">  
        <input type="text" placeholder="请输入收件人邮箱" v-model="form.email" />  
        <input type="text" placeholder="请输入主题" v-model="form.theme" />  
        <input type="text" placeholder="请输入内容" v-model="form.content" />  
        <button type="submit">提交</button>  
      </form>  
    </div>  
</template>  
  
<script setup lang="ts">  
  import { reactive } from "vue";  
  
  const form = reactive({    
    email: null,  
    theme: null,
    content: null,  
  });  
  
  // 定义emits事件
  const emit = defineEmits<{ "submit-form": [any] }>()
  
  //阻止了表单的默认提交，自定义了表单的提交函数
  const submitForm = () => {
    // console.log("表单提交数据:", form);
    // 子组件通过 emit 触发 submit-form事件，并将表单数据传给父组件
    emit("submit-form", form)
  };  
</script>  
  
<style scoped>  
form {  
  display: flex;  
  flex-direction: column;  
  max-width: 400px;  
  margin: 0 auto;  
  padding: 20px;  
  border: 1px solid #e0e0e0;  
  border-radius: 8px;  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
  background-color: #ffffff;  
}  

input {  
  margin-bottom: 15px;  
  padding: 10px;  
  border: 1px solid #cccccc;  
  border-radius: 4px;  
  font-size: 16px;  
}  

button {  
  padding: 10px;  
  background-color: #007bff;  
  color: white;  
  border: none;  
  border-radius: 4px;  
  font-size: 16px;  
  cursor: pointer;  
}  

button:hover {  
  background-color: #0056b3;  
}  
</style>