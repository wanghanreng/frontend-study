import { createApp } from 'vue';  
import App from './App.vue';  
import './style.css'; // 引入样式
import router from './router'; // 引入路由   

const app = createApp(App);  
app.use(router);  // 注册路由  
app.mount('#app');