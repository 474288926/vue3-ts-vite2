<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const increment = () => {
  count.value += 1
}
</script>

<style scoped>
button {
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
}
</style>
