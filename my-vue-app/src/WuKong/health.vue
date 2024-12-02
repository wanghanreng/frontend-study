<template>  
    <div class="container">  
        <p class="health">生命值: {{ hp }} / 100 ({{ progress }}%)</p>  
        <div class="progress-bar">  
            <div  
                class="progress"  
                :style="{ width: progress + '%' }"  
            ></div>  
        </div>  
    </div>  
</template>  

<script setup lang="ts">  
import { ref, computed } from 'vue';  

const hp = ref<number>(70);  
const maxHp = 100;  
const progress = computed(() => {  
    return Math.round((hp.value / maxHp) * 100);  
});  
</script>  

<style scoped>  
.progress-bar {  
    width: 100%;  
    background-color: #e2e8f0;   
    border-radius: 100px;  
    overflow: hidden;  
}  

.progress {  
    height: 30px;  
    background-color: #48bb78; 
    border-radius: 100px;  
    transition: width 0.3s ease; 
}  
</style>
