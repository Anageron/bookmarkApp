<script setup lang="ts">
import CategoryList from '@/components/CategoryList.vue';
import ProfileAvatar from '@/components/ProfileAvatar.vue';

</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  width: 100%;
}

.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1450px;
  margin: 140px auto 0 auto;
}

.nav {
  flex-direction: column;
  min-width: 300px;
}
</style>
