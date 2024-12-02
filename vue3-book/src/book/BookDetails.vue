<template>  
  <div class="book-details" v-if="book">  
    <div class="book-image">  
      <img :src="book.image" alt="书籍封面" />  
    </div>  
    <div class="book-info">  
      <h1>{{ book.title }}</h1>  
      <p class="price">￥{{ book.price }}</p>  
      <p class="description">{{ book.description }}</p>  
      <button @click="addToCart" class="add-to-cart">添加到购物车</button>  
    </div>  
  </div>  
  <div v-else>  
    <p>正在加载书籍信息...</p>  
  </div>  
</template>  

<script>  
export default {  
  name: 'BookDetails',  
  data() {  
    return {  
      book: null,  
    };  
  },  
  created() {  
    // 根据书籍 ID 获取书籍详情  
    const bookId = this.$route.params.id;  
    this.fetchBookDetails(bookId);  
  },  
  methods: {  
    fetchBookDetails(bookId) {   
      const books = [  
        {  
          id: 1,  
          title: '斗破苍穹',  
          price: 29.0,  
          image: 'https://t14.baidu.com/it/u=3057383004,3172169992&fm=224&app=112&f=JPEG?w=500&h=500',  
          description: '《斗破苍穹》的故事发生在一个充满“斗气”的大陆上，讲述了名为萧炎的少年，年少时被视为废物，接着奋起抗争，凭借自身努力、高人指导、奇珍异宝的帮助，不断收集“异火”，持续提升丹药炼制水平和斗气修炼水平的故事。最后，主角萧炎不仅洗刷当年的耻辱，还一跃成为斗气大陆上的最强者——“斗帝”，成为该世界秩序守护者和最高权力拥有者。',  
        },  
        {  
          id: 2,  
          title: '斗罗大陆',  
          price: 35.0,  
          image: 'https://t15.baidu.com/it/u=3957483946,702352818&fm=224&app=112&f=JPEG?w=500&h=500',  
          description: '唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大陆上最为强大也是最荣耀的职业——魂师!',  
        },  
        {  
          id: 3,  
          title: '龙族',  
          price: 45.0,  
          image: 'https://img0.baidu.com/it/u=979023362,3746928428&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625',  
          description: '《龙族》讲叙了少年路明非在申请国外大学时收到了来自芝加哥远郊处的一所私立大学：卡塞尔学院的邀请函，随着路明非同学坐上去往芝加哥的CC1000次列车，踏上了与龙族争锋的征程。',  
        },  
      ];  

      this.book = books.find(book => book.id === parseInt(bookId));  
    },  
    addToCart() {  
      // 先从 localStorage 获取现有的购物车项  
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];  

      // 检查书籍是否已经在购物车中  
      const existingBookIndex = cartItems.findIndex(item => item.id === this.book.id);  
      if (existingBookIndex !== -1) {  
        alert(`《${this.book.title}》已经在购物车中！`);  
      } else {  
        // 如果不在购物车中，则添加  
        cartItems.push(this.book);  
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // 更新 localStorage  
        alert(`${this.book.title} 已添加到购物车！`);  
      }  
    },  
  },  
};  
</script>  

<style scoped>  
.book-details {  
  display: flex;  
  padding: 20px;  
}  

.book-image img {  
  max-width: 200px;  
  margin-right: 20px;  
}  

.book-info {  
  max-width: 600px;  
}  

.price {  
  font-size: 24px;  
  color: #e74c3c;  
}  

.description {  
  margin: 10px 0;  
}  

.add-to-cart {  
  background-color: #3498db;  
  color: white;  
  border: none;  
  padding: 10px 15px;  
  cursor: pointer;  
  font-size: 16px;  
}  

.add-to-cart:hover {  
  background-color: #2980b9;  
}  
</style>