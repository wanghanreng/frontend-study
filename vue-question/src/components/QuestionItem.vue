<template>  
    <div class="question-item" @click="$emit('click')">  
      <h3>{{ question.title }}</h3>  
      <p>{{ question.views }} 浏览 | {{ question.answers }} 回答 | {{ question.time }} 提问</p>  
      <button>写回答</button>  
    </div>  
  </template>  
  
  <script>  
  export default {  
    props: {  
      question: Object,  
    },  
  };  
  </script>  
  
  <style>  
  .question-item {  
    border: 1px solid #ddd;  
    padding: 10px;  
    margin: 10px 0;  
    cursor: pointer;  
  }  
  </style>