import { createRouter, createWebHistory } from "vue-router"; // 只导入需要的内容  
// import Home from "../views/Home.vue";  
import Layout from "../views/Layout.vue";
// import ArticleList from "../views/ArticleList.vue";
// import ArticleDetail from "../views/ArticleDetail.vue";
// import UserDashboard from "../views/UserDashboard.vue";
// import UserProfile from "../views/UserProfile.vue";
// import UserSetting from "../views/UserSetting.vue";
// import Login from "../views/Login.vue";

const routes = [
    {
        path:"/",
        name:"Layout",
        component: Layout,
        redirect:"/home",
        children: [
            {
                path:"/home",
                name:"Home",
                component: () =>  import("../views/Home.vue"),
            },
            {
                path:"/articleList",
                name:"ArticleList",
                component: () =>  import("../views/ArticleList.vue"),
            },
            {
                path:"/articles/:id",
                name:"ArticleDetail",
                component: () =>  import("../views/ArticleDetail.vue"),
                children:[
                    {
                        path:"comments",
                        name:"ArticcleComments",
                        component: () =>  import("../views/ArticleComments.vue"),
                    },
                ],
            },
            {
                path:"/user",
                component: () =>  import("../views/UserDashboard.vue"),
                redirect:"/user/profile",
                children: [
                    {
                        path:"profile",
                        name:"UserProfile",
                        component: () =>  import("../views/UserProfile.vue"),
                    },
                    {
                        path:"setting",
                        name:"UserSetting",
                        component: () =>  import("../views/UserSetting.vue"),
                    }
                ]
            }
        ]
    },
    {
        path:"/login",
        name:"Login",
        component: () =>  import("../views/Login.vue"),
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else{
            return {top: 0};
        }
    },
})

router.beforeEach((to,from,next) => {
    if((to.path.startsWith("/user")) && !localStorage.getItem("token")){
        alert("请先登录")
        next("/login");
    }else {
        next();
    }
})


export default router