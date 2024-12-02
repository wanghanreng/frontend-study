import { defineStore } from "pinia";  

// 定义 CounterState 的接口  
interface CounterState {  
  count: number;  
}  

// 定义一个 Store，名为 counter  
export const useCounterStore = defineStore("counter", {  
  // State: 定义状态的类型  
  state: (): CounterState => ({  
    count: 0,  
  }),  
  
  // Getters: 计算属性  
  getters: {  
    doubleCount: (state: CounterState): number => state.count * 2,  
  },  
  
  // Actions: 定义状态的方法  
  actions: {  
    increment() {  
      this.count++;  
    },  
    decrement() {  
      this.count--;  
    },  
  },  
});