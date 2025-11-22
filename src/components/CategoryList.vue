<script setup lang="ts">
import { useCategoryStore } from '@/stores/category.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/Icons/IconPlus.vue';


const store = useCategoryStore()

onMounted(() => {
  store.fetchCategory()
})
</script>

<template>
  <ul class="list">
    <li class="list-item" v-for="item in store.category" :key="item.id">
     <a :href="`/${item.alias}`">{{ item.name }}</a>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory" >
        <IconPlus />
      </ButtonIcon>
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

.list-item a:hover {
  font-size: 24px;
  font-weight: 700;
}

</style>
