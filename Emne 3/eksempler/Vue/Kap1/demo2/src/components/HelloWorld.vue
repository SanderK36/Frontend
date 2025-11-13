<script setup lang="ts">
import { ref } from 'vue'

interface HelloWorldProps {
  msg: string
}
defineProps<HelloWorldProps>()

const count = ref(9)
const numbers = ref([1, 2, 3, 4, 5])

function multiply(factor:number){
  count.value *= factor
}
</script>

<template>
  <div>
    <h1 v-if="count < 10">Mindre enn 10</h1>
    <h2 v-else-if="count < 20">Mindre enn 20</h2>
    <h3 v-else>20 eller mer</h3>

    <div class="card">
      <input type="range" min="1" max="100" v-model="count" />
      <button type="button" @click="count++">
        count is {{ count }}
      </button>
      <button type="button" @click="multiply(2)">doble</button>
      <button type="button" @click="multiply(3)">triple</button>
    </div>
    <ul style="text-align: left">
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
  </div>
  <!--
  Built in directives
    ok v-bind eller :
    ok v-model
    ok v-show
    ok v-if, v-else og v-else-if
    ok v-on eller @
    ok v-for og :key
  -->
</template>

<style scoped></style>
