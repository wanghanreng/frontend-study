import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

//引入
import { createPinia } from 'pinia';
//实例化
const pinia = createPinia();

import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
pinia.use(piniaPluginPersistedstate);

createApp(App)
.use(pinia)
.use(router)
.mount("#app");
