<template>  
    <div class="container">  
        <h1 class="user-name">{{ userName }}</h1>  
        <h2 class="user-name1">{{ userName1 }}</h2>  
        <p class="message">{{ message }}</p>  
    </div>  
</template>  

<script setup lang="ts">  
import { ref } from 'vue'  
const userName = ref<string>('悟空')  
const userName1 = ref<string>('齐天大圣')  
const message = ref<string>('在《西游记》中，孙悟空是一个勇敢无畏、机智聪明的角色，以其强大的能力和不屈的精神著称。')  

</script>  

<style scoped> 
    .container {  
        padding: 16px;  
        background-color: #e7cb77f3; 
        border-radius: 8px;  
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0);  
    }  

    .user-name {  
        font-size: 40px;  
        font-weight: bold;  
        color: #b02b36; 
    }  

    .user-name1 {  
        font-size: 20px;  
        font-weight: 600;  
        color: #ce3153; 
    }  

    .message {  
        margin-top: 8px;  
        color: #4a5568; 
    }  
</style>