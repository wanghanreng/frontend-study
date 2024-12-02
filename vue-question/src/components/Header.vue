<template>  
    <header class="header">  
      <input type="text" placeholder="搜索问题..." @keyup.enter="search" />  
      <div class="user-icon" @click="$emit('goToProfile')">👤</div>  
      <button @click="askQuestion">提问</button>  
    </header>  
  </template>  
  
  <script>  
  export default {  
    methods: {  
      search(event) {  
        this.$emit('search', event.target.value);  
      },  
      askQuestion() {  
        console.log('提问');  
      },  
    },  
  };  
  </script>  
  
  <style>  
  .header {  
    display: flex;  
    justify-content: space-between;  
    padding: 10px;  
    background-color: #f5f5f5;  
  }  
  .user-icon {  
    cursor: pointer;  
  }  
  </style>