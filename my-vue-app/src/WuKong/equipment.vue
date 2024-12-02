<template>  
    <div class="app">  
      <h1 class="title">装备管理</h1>  
      <div class="form">  
        <input  
          v-model="equipment"  
          type="text"  
          placeholder="输入装备名称"  
          class="input"  
        />  
        <button @click="addEquipment" class="button">添加装备</button>  
      </div>  
      <ul class="equipment-list">  
        <li v-for="(item, index) in equipmentList" :key="index" class="list-item">  
          {{ item }}  
          <button @click="removeEquipment(index)" class="delete-button">删除</button>  
        </li>  
      </ul>  
    </div>  
  </template>  
  
  <script>  
  export default {  
    data() {  
      return {  
        equipment: '',  
        equipmentList: [],  
      };  
    },  
    methods: {  
      addEquipment() {  
        if (this.equipment) {  
          this.equipmentList.push(this.equipment);  
          this.equipment = '';  
        }  
      },  
      removeEquipment(index) {  
        this.equipmentList.splice(index, 1);  
      },  
    },  
  };  
  </script>  
  
  <style>  
  .app {  
    max-width: 400px;  
    margin: 50px auto;  
    padding: 20px;  
    border: 1px solid #ccc;  
    border-radius: 8px;  
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
    text-align: center;  
  }  
  
  .title {  
    font-size: 24px;  
    margin-bottom: 20px;  
  }  
  
  .form {  
    display: flex;  
    justify-content: center;  
    margin-bottom: 20px;  
  }  
  
  .input {  
    padding: 10px;  
    border: 1px solid #ccc;  
    border-radius: 4px;  
    margin-right: 10px;  
    flex: 1;  
  }  
  
  .button {  
    padding: 10px 15px;  
    background-color: #007bff;  
    color: white;  
    border: none;  
    border-radius: 4px;  
    cursor: pointer;  
  }  
  
  .button:hover {  
    background-color: #0056b3;  
  }  
  
  .equipment-list {  
    list-style-type: none;  
    padding: 0;  
  }  
  
  .list-item {  
    border-bottom: 1px solid #ccc;  
    padding: 10px 0;  
    display: flex;  
    justify-content: space-between;  
    align-items: center;  
  }  
  
  .delete-button {  
    background-color: #dc3545;  
    color: white;  
    border: none;  
    border-radius: 4px;  
    padding: 5px 10px;  
    cursor: pointer;  
  }  
  
  .delete-button:hover {  
    background-color: #c82333;  
  }  
  </style>