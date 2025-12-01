<script setup lang="ts">
import BookmarkAdd from '@/components/bookmarkAdd.vue'
import BookmarkCard from '@/components/BookmarkCard.vue'
import BookmarkSort from '@/components/bookmarkSort.vue'
import CategoryHeader from '@/components/CategoryHeader.vue'
import type { ICategory } from '@/Interfaces/Category.interfaces'
import { useBookmarkStore } from '@/stores/bookmark.store'
import { useCategoryStore } from '@/stores/category.store'
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const categoryStore = useCategoryStore()
const bookmarkStore = useBookmarkStore()
const category = ref<ICategory>()

onMounted(() => {
  categoryStore.fetchCategory()
})

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.category,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias)
    if (category.value) bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort)
  },
)

onBeforeMount(async () => {
  const alias = route.params.alias

  if (categoryStore.category.length === 0) {
    await categoryStore.fetchCategory()
  }

  const found = categoryStore.category.some((cat) => cat.alias === alias)

  if (!found) {
    router.push('/_nonexistent_404_' + alias)
  }
})

function sortBookmarks(sort: string) {
  bookmarkStore.activeSort = sort
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort)
  }
}
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
  <BookmarkSort :option="bookmarkStore.activeSort" @sort="sortBookmarks" />
  <div class="categoty-list">
    <BookmarkCard v-for="item in bookmarkStore.bookmarks" :key="item.id" v-bind="item" />
    <BookmarkAdd v-if="category" :category_id="category.id"/>
  </div>

</template>

<style scoped>
.categoty-list {
  margin-block-end: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 350px);
  gap: 20px;
}
</style>
