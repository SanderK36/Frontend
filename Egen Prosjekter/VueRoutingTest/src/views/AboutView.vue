<script setup lang="ts">
import { ref } from 'vue';

const header = ref("Hei fra Om siden!")
</script>

<template>
    <h1>{{ header }}</h1>
</template>

<style scoped>
    h1 {
        font-size: 50px;
        color: red;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 30%;
    }
</style>