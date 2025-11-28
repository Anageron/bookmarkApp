import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IBookMark } from '@/Interfaces/bookmart.interfaces'
import { API_ROUTES, client } from '@/api'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookMark[]>([])

  async function fetchBookmarks(categoryId: number) {
    const { data } = await client().get<IBookMark[]>(API_ROUTES.bookmarks(categoryId))
    bookmarks.value = data
  }


  return { bookmarks, fetchBookmarks }
})
