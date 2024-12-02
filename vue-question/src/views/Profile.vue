<template>  
    <div class="profile">  
      <h2>用户资料</h2>  
      <p>这里是用户资料的详细信息...</p>  
      <UserProfile />  
    </div>  
  </template>  
  
  <script>  
  import UserProfile from '../components/UserProfile.vue';  
  
  export default {  
    components: {  
      UserProfile  
    }  
  };  
  </script>  
  
  <style>  
  .profile {  
    padding: 20px;  
  }  
  </style>