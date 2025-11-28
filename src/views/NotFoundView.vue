<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
function redirectToMain(){
router.push('/')
}
</script>

<template>
  <div class="not-found">
    <h1 class="not-found__header">404</h1>
    <ButtonText @click='redirectToMain'>
      На главную
    </ButtonText>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 52px;
}

.not-found__header {
  font-size: 102px;
  font-weight: 700;
}
</style>
