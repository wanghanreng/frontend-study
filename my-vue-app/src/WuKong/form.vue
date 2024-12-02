
<template>
    <div class="container">
        <h1 class="title">当前形态: {{ currentForm }}</h1>
        <button @click="toggleForm" class="toggle-button">
            切换形态
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const currentForm = ref("孙悟空");

        const toggleForm = () => {
            currentForm.value = currentForm.value === "孙悟空" ? "斗战胜佛" : "孙悟空";
        };

        return {
            currentForm,
            toggleForm
        };
    }
};
</script>

<style scoped>
    .container {  
        display: flex;  
        flex-direction: column;  
        align-items: center;  
        justify-content: center;  
        height: 50vh;  
        background-color: #daf07a;  
    } 

    .title {  
        font-size: 2rem;  
        margin-bottom: 1rem;  
        color: #f80808;  
    } 
</style>
