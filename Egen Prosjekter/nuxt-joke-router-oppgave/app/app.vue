<script setup>
const { data, pending, error, refresh } = useFetch('/api/jokes')

const joke = computed(() => {
  if (!data.value) return null
  return data.value[Math.floor(Math.random() * data.value.length)]
})
</script>

<template>
  <div>
    <h1>jokes fra ett api!</h1>

    <div v-if="pending">Laster...</div>
    <div v-else-if="error">Noe gikk galt: {{ error.message }}</div>

    <div v-else>
      <ul>
        <li>
          {{ joke }}
        </li>
      </ul>

      <div>
        <ul>
          <li v-for="(j, index) in data">{{ j }}</li>
        </ul>
      </div>
    </div>

    <button @click="refresh">Last inn på nytt</button>

  </div>
</template>