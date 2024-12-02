<template>  
    <div class="question-list">  
      <h2>问题列表</h2>  
      <div v-for="question in questions" :key="question.id">  
        <QuestionItem :question="question" @click="viewQuestion(question.id)" />  
      </div>  
    </div>  
  </template>  
  
  <script>  
  import QuestionItem from './QuestionItem.vue';  
  
  export default {  
    components: {  
      QuestionItem,  
    },  
    props: {  
      questions: Array,  
    },  
    methods: {  
      viewQuestion(id) {  
        this.$emit('viewQuestion', id);  
      },  
    },  
  };  
  </script>  
  
  <style>  
  .question-list {  
    flex: 1;  
    padding: 20px;  
  }  
  </style>