import { createRouter, createWebHistory } from 'vue-router';  
import Layout from '../components/Layout.vue';  
import Counter from '../views/Counter.vue';  
import Todo from '../views/Todo.vue';  
import Finance from '../views/Finance.vue';  

const routes = [  
  {  
    path: '/',  
    name: 'Layout',  
    component: Layout,  
    redirect: '/counter',  
    children: [  
      {  
        path: '/counter',  
        component: Counter,  
      },  
      {  
        path: '/todo',   
        component: Todo,  
      },  
      {  
        path: '/finance',    
        component: Finance,  
      },  
    ],  
  },  
];  

const router = createRouter({  
  history: createWebHistory(),  
  routes,  
});  

export default router;