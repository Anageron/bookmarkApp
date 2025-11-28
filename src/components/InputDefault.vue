<script setup lang="ts">
const data = defineModel<string>()
</script>

<template>
  <input class="input" v-model="data">
</template>

<style scoped>
.input {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  color: var(--color-fg);
  font-size: 24px;
  min-width: 274px;
}

.input::placeholder {
  color: var(--color-inactive);
}
</style>
