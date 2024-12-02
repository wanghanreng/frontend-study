import axios from "axios";

//创建axios实例
const api = axios.create({
    baseURL: "https://api.zhihu.com",
    timeout: 8000,
});

export default api;