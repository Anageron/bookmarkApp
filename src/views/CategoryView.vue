<script setup lang="ts">
import type { ICategory } from '@/Interfaces/Category.interfaces';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/category.store';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import {useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<ICategory>();

onMounted(() => {
  categoryStore.fetchCategory();
})

watch(() =>  ({
  alias: route.params.alias,
  categories: categoryStore.category
}),
(data)=> {
  category.value = categoryStore.getCategoryByAlias(data.alias)
  if(category.value)
  bookmarkStore.fetchBookmarks(category.value.id)
})

onBeforeMount(async () => {
  const alias = route.params.alias

  if (categoryStore.category.length === 0) {
    await categoryStore.fetchCategory()
  }

  const found = categoryStore.category.some(cat => cat.alias === alias)

  if (!found) {
    router.push('/_nonexistent_404_' + alias)
  }
})



</script>

<template>
Category
 {{ category?.name }}
 {{ bookmarkStore.bookmarks.length }}

 </template>
