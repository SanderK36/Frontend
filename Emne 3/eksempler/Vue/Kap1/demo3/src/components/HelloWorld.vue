<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const people = ref([
  { name: 'Terje', age: 50 },
  { name: 'Kari', age: 40 },
  { name: 'Ola', age: 30 }
]);

function deletePerson(index: number) {
  people.value.splice(index, 1);
}
</script>

<template>
  <div id="main">

    <h1>{{ msg }}</h1>

    <div class="card">
      <table>
        <tr v-for="(person,index) in people" :key="index">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td><button @click="deletePerson(index)">x</button></td>
        </tr>
      </table>


      <!-- <input type="range" min="1" max="20" step="1" v-model="count" />
      {{ count }}
      <br/>

      <button @click="count++">
        count is {{ count }}
      </button> -->

      <!-- <button @click="count++" v-if="count < 8">
        count is {{ count }}
      </button>
      <button @click="count++" v-else-if="count == 8">
        8
        <h3>Snart ferdig!</h3>
      </button>
      <button @click="count++" v-else-if="count == 9">
        9
        <h3>Snart ferdig!</h3>
      </button>
      <h3 @click="count++" v-else disabled>
        Ferdig!
      </h3> -->

      <!-- <button @click="count++" v-show="count < 10">
        count is {{ count }}
      </button> -->
      <!-- <button @click="count++" :disabled="count > 10">
        count is {{ count }}
      </button> -->
      <!--
        <button @click="count++" :style="`background-color: rgb(${count * 10}, ${255 - count * 10},0)`">
          count is {{ count }}
        </button>
        -->
      <!--<input type="button" @click="count++" :value="`count is ${ count }`"/>-->
    </div>
  </div>
</template>

<style scoped>
#main {
  background-color: lightblue;
}
li{
  text-align: left;
}
</style>
