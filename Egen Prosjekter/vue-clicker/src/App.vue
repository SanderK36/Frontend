<script setup lang="ts">
import ClickerButton from './components/ClickerButton.vue'
import MilestoneMessages from './components/MilestoneMessages.vue'
import ClickHistory from './components/ClickHistory.vue'
</script>

<template>
  <div class="container">
    <h1>Clicker test!</h1>

    <MilestoneMessages />
    <ClickerButton />
    <ClickHistory />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
h1 {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2em;
}
</style>
