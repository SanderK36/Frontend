<script setup lang="ts">
import { inject } from 'vue'
const message = inject<string>('sharedMessage', 'Default verdi')
</script>

<template>
    <p>Injectet melding: {{ message }}</p>
</template>
