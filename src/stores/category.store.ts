import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, http } from '../api'
import type { ICategory } from '@/Interfaces/Category.interfaces'

export const useCategoryStore = defineStore('category', () => {
  const category = ref<ICategory[]>([])

  async function fetchCategory() {
    const { data } = await http.get<ICategory[]>(API_ROUTES.categories)
    category.value = data
  }

  async function createCategory() {
    const { data } = await http.post<ICategory>(API_ROUTES.categories,{
      name: 'Новая категория',
      alias: 'new'
    })
    category.value.push(data)
  }

  return { category, fetchCategory, createCategory }
})
