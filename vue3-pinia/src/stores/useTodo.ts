import { defineStore } from 'pinia';  
import { ref } from 'vue';  

// 定义 Todo 
interface Todo {  
  id: number;  
  text: string;  
  completed: boolean;  
}  

// 定义 Store，使用该 API  
export const useTodoStore = defineStore("todo", () => {  
  // 定义待办事项  
  const todos = ref<Todo[]>([]);  

  // 添加新待办事项  
const addTodo = (todoText: string) => {  
  const newTodo: Todo = {  
    id: Date.now(), // 使用当前时间戳作为唯一标识符  
    text: todoText,  
    completed: false,  
  };  
  todos.value.push(newTodo);  
};  

// 删除待办事项  
const removeTodo = (index: number) => {  
  todos.value.splice(index, 1);  
};  

// 切换待办事项完成状态  
const toggleTodo = (index: number) => {  
  if (todos.value[index]) {  
    todos.value[index].completed = !todos.value[index].completed;  
  }  
};
  
  // 返回 Store 中定义的所有响应式属性和方法  
  return {  
    todos,  
    addTodo,  
    removeTodo,  
    toggleTodo,  
  };  
},
{
  persist: {
    key: "my-todo-store",
    storage : localStorage,
  },
}
);