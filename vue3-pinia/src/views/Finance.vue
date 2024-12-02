<template>  
  <div class="finance-app">  
    <h1>记账应用</h1>  
    <div class="input-section">  
      <input v-model="description" placeholder="描述" />  
      <input v-model.number="amount" placeholder="金额" />  
      <select v-model="type">  
        <option value="income">收入</option>  
        <option value="expense">支出</option>  
      </select>  
      <button @click="addTransaction">添加记录</button>  
    </div>  
    <h2>交易记录</h2>  
    <ul>  
      <li v-for="(transaction, index) in transactions" :key="transaction.id">  
        {{ transaction.description }} - {{ transaction.amount }} ({{ transaction.type }})  
        <button @click="removeTransaction(index)">删除</button>  
      </li>  
    </ul>  
    <h2>统计信息</h2>  
    <p>总收入: {{ totalIncome }}</p>  
    <p>总支出: {{ totalExpense }}</p>  
    <p>当前余额: {{ balance }}</p>  
  </div>  
</template>  

<script>  
export default {  
  data() {  
    return {  
      description: '',  
      amount: 0,  
      type: 'income',  
      transactions: JSON.parse(localStorage.getItem('transactions')) || [],  
    };  
  },  
  computed: {  
    totalIncome() {  
      return this.transactions  
        .filter(t => t.type === 'income')  
        .reduce((sum, t) => sum + t.amount, 0);  
    },  
    totalExpense() {  
      return this.transactions  
        .filter(t => t.type === 'expense')  
        .reduce((sum, t) => sum + t.amount, 0);  
    },  
    balance() {  
      return this.totalIncome - this.totalExpense;  
    },  
  },  
  methods: {  
    addTransaction() {  
      if (this.description && this.amount) {  
        const newTransaction = {  
          id: Date.now(),  
          description: this.description,  
          amount: this.amount,  
          type: this.type,  
        };  
        this.transactions.push(newTransaction);  
        this.updateLocalStorage();  
        this.description = '';  
        this.amount = 0;  
      }  
    },  
    removeTransaction(index) {  
      this.transactions.splice(index, 1);  
      this.updateLocalStorage();  
    },  
    updateLocalStorage() {  
      localStorage.setItem('transactions', JSON.stringify(this.transactions));  
    },  
  },  
};  
</script>  

<style scoped>  
.finance-app {  
  max-width: 600px;  
  margin: auto;  
  text-align: center;  
}  
.input-section {  
  margin-bottom: 20px;  
}  
</style>