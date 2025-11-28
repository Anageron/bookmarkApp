<script setup lang="ts">
import { useCategoryStore } from '@/stores/category.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/Icons/IconPlus.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';


const store = useCategoryStore()
const authStore = useAuthStore()
const router = useRouter();

function logout(){
  authStore.clearToken()
  router.push({name: 'auth'})
}

onMounted(() => {
  store.fetchCategory()
})
</script>

<template>
  <ul class="list">
    <li class="list-item" v-for="item in store.category" :key="item.id">
      <RouterLink active-class="active-link" :to="`/main/${item.alias}`">{{ item.name }}</RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory">
        <IconPlus />
      </ButtonIcon>
    </li>
    <li class="list-item">
      <a href="#" @click="logout">Выход</a>
    </li>
  </ul>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

.list li {
  list-style: none;
}



.list-item a {
  text-decoration: none;
  font-size: 14px;
  transition: all 0.5s;
  color: var(--color-fg);
}

.list-item a:hover,
.list-item a.active-link {
  font-size: 24px;
  font-weight: 700;
}
</style>
