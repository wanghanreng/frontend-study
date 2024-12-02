<template>
    <div>
        <!-- 绑定 isDisabled 属性 -->
        <button :disabled="isDisabled">点击</button>
        <img :src="url" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isDisabled = ref<boolean>(true)
const url = ref<String>
    'https://img2.baidu.com/it/u=735894220,1392610724&fm=253&fmt=auto&app=138&f=JPEG?w=849&h=500'

</script>