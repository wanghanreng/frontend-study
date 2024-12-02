import Mock from "mockjs";

Mock.mock("https://api.zhihu.com/hot", "get", {  
    "data|10": [  
      {  
        "id|+1": 1, // id从1开始  
        title: "@ctitle(5,10)", // 标题长度在5到10之间  
        excerpt: "@paragraph(2,3)", // 摘要为2到3段文字  
        url: "@url", // 网址  
        image: "@image('200x100', '#508347', '#FFF', 'img')", // 图片  
        hotIndex: "@integer(1000,5000)", // 热度指数在1000到5000之间  
      }  
    ]  
});

//添加数据POST请求
Mock.mock("https://api.zhihu.com/hot", "post", {  
  message: "添加成功",  
  data: {  
    id: "@integer(11,100)",  
    title: "新的标题",  
    excerpt: "新的内容",  
    url: "@url",  
    image: "https://server.xmyeditor.com/picture/9/80c2a936f783cbf396caff480449a565.jpg",  
    hotIndex: "8888",  
  },  
});

// 更新热门话题 PUT 请求  
Mock.mock(/https:\/\/api.zhihu.com\/hot\/\d+/, "put", {  
  message: "更新成功",  
});  

// 删除热门话题 DELETE 请求  
Mock.mock(/https:\/\/api.zhihu.com\/hot\/\d+/, "delete", {  
  message: "删除成功",  
});

