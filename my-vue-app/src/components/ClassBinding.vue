<template>
    <div>
        <p :class="pClass">这是一段文字</p>
        <button @click="toggleClass">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isHighlight = ref<boolean>(false)

// 动态切换的样式名
const pClass = ref<{ [key: string]: boolean }>({
    isHighlight: isHighlight.value,
    normal: !isHighlight.value,
})

// 切换类名的函数
const toggleClass = () => {
    isHighlight.value = !isHighlight.value
    pClass.value = {
        isHighlight: isHighlight.value,
        normal: !isHighlight.value,
    }
}
</script>

<style scoped>
.isHighlight {
    color: red;
}
.normal {
    color: black;
}
</style>