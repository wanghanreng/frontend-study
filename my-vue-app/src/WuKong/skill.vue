<template>
    <div class="container">
        <h1 class="title">技能列表</h1>
        <ul class="skills-list">
            <li v-for="(skill, index) in skills" :key="index" class="skill-item">
                <span :class="skill.unlocked ? 'unlocked' : 'locked'">{{ skill.name }}</span> - 
                <span>{{ skill.unlocked ? '已解锁' : '未解锁' }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const skills = ref([
            { name: '七十二变', unlocked: true },
            { name: '筋斗云', unlocked: false },
            { name: '如意金箍棒', unlocked: true },
            { name: '火眼金睛', unlocked: false },
        ]);

        return {
            skills
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
        background-color: #d5d5d5ed;
    }

    .title {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #f80808;
    }

    .skills-list {
        list-style-type: none;
        padding: 0;
    }

    .skill-item {
        margin: 0.5rem 0;
        font-size: 1.2rem;
    }

    .unlocked {
        color: green;
    }

    .locked {
        color: red;
    }
</style>
