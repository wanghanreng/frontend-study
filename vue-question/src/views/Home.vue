<template>  
    <div class="home">  
      <Header @search="handleSearch" @goToProfile="goToProfile" />  
      <div class="content">  
        <QuestionList :questions="questions" @viewQuestion="viewQuestion" />  
        <UserProfile />  
      </div>  
    </div>  
  </template>  
  
  <script>  
  import Header from '../components/Header.vue';  
  import QuestionList from '../components/QuestionList.vue';  
  import UserProfile from '../components/UserProfile.vue';  
  
  export default {  
    components: {  
      Header,  
      QuestionList,  
      UserProfile,  
    },  
    data() {  
      return {  
        questions: [  
          { id: 1, title: '怎样才能当好一个继母呢？', views: 1, answers: 0, time: '8分钟前' },  
          { id: 2, title: '我们哪一瞬间突然就成熟了？', views: 6, answers: 1, time: '17小时前' },  
          { id: 3, title: '孙颖莎为什么输掉了巴黎单项决赛？', views: 12, answers: 0, time: '1小时前' },  
          { id: 4, title: '成家以后的人委屈只能自己往肚子里吞吗？', views: 0, answers: 1, time: '1小时前' },  
        ],  
      };  
    },  
    methods: {  
      handleSearch(query) {  
        console.log('搜索:', query);  
      },  
      goToProfile() {  
        this.$router.push({ name: 'Profile' }); // 跳转到个人资料页面  
      },  
      viewQuestion(id) {  
        console.log('查看问题:', id);  
      },  
    },  
  };  
  </script>  
  
  <style>  
  .home {  
    display: flex;  
  }  
  .content {  
    display: flex;  
    flex: 1;  
  }  
  </style>