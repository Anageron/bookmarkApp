import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IBookMark } from '@/Interfaces/bookmart.interfaces'
import { API_ROUTES, client } from '@/api'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookMark[]>([])
  const activeSort =  ref<string>('date')

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get<IBookMark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort
      }
    })
    bookmarks.value = data
  }

  async function deleteBookmark(id: number, categoryId:number) {
    await client().delete<IBookMark[]>(API_ROUTES.bookmarks.delete(id))
    fetchBookmarks(categoryId, activeSort.value);
  }


  return { bookmarks, fetchBookmarks, deleteBookmark, activeSort }
})
