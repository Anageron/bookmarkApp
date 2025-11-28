<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store';
import { computed, onMounted } from 'vue';


const store = useProfileStore()

onMounted(()=> {
  store.fetchProfile()
})

const name = computed( ()=> {
  return store.profile ? store.profile.name : 'Гость'
})
</script>

<template>
  <div class="profile-avatar">
    <img class="avatar" src="/avatar.png" alt="Изображение пользователя">
    <div>Привет, <strong>{{ name }}</strong>!</div>
  </div>
</template>

<style scoped>
.profile-avatar{
   display: flex;
   flex-direction: column;
   gap: 24px;
   font-size: 18px;
   margin-block-end: 40px;
}

.avatar {
  width: 80px;
  height: 80px;
}

</style>
