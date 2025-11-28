<script setup lang="ts">
const props = defineProps<{
  emoji: string
  isOpen: boolean
}>()
</script>

<template>
    <div class="card" :class="{ open: isOpen }">
        <div class="card-inner">
            <div class="card-front">?</div>
            <div class="card-back">{{ emoji }}</div>
        </div>
    </div>
</template>

<style scoped>
.card {
  width: 100px;
  height: 100px;
  perspective: 1000px;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
}
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 12px;
}
.card-front {
  background: #2c3e50;
  color: white;
}
.card-back {
  background: #ecf0f1;
  transform: rotateY(180deg);
}
.open .card-inner {
  transform: rotateY(180deg);
}
</style>