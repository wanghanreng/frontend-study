import { createRouter, createWebHistory } from 'vue-router';  
import Home from '../book/Home.vue';  
import BookList from '../book/BookList.vue';  
import Cart from '../components/Cart.vue';  
import Login from '../components/Login.vue';  
import BookDetails from '../book/BookDetails.vue';
import CartList from '../components/CartList.vue'; 
import OrderInfo from '../components/OrderInfo.vue';

const routes = [  
  { path: '/', component: Home },  
  { path: '/books', component: BookList },  
  {  
    path: '/cart',  
    component: Cart,  
    children: [  
      {  
        path: '',  
        component: CartList, // 默认路由指向购物车列表  
      },  
      {  
        path: 'orders',  
        component: OrderInfo, // 订单信息  
      },  
    ],  
  }, 
  { path: '/login', component: Login },  
  { path: '/books/:id', component: BookDetails }, // 动态书籍详情路由  
]; 

// 创建路由实例  
const router = createRouter({  
  history: createWebHistory(),  
  routes,  
});  

// 添加路由守卫  
router.beforeEach((to, from, next) => {  
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  
  if (to.path === '/cart' && !isLoggedIn) {  
    next('/login'); // 未登录用户重定向到登录页面  
  } else {  
    next(); // 继续导航  
  }  
});  

export default router;