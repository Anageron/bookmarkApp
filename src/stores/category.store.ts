import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, client } from '../api'
import type { ICategory } from '@/Interfaces/Category.interfaces'
import { v4 as uuidv4 } from 'uuid'

export const useCategoryStore = defineStore('category', () => {
  const category = ref<ICategory[]>([])

  async function fetchCategory() {
    const { data } = await client().get<ICategory[]>(API_ROUTES.categories)
    category.value = data
  }

  async function createCategory() {
    const { data } = await client().post<ICategory>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })
    category.value.push(data)
  }

  async function updateCategory(name:string, alias:string, id: number) {
      await client().put<ICategory>(API_ROUTES.categories + '/' + id, {
      name,
      alias,
    })
    fetchCategory()
  }

  async function deleteCategory(id: number) {
      await client().delete<ICategory>(API_ROUTES.categories + '/' + id)
    fetchCategory()
  }

  function getCategoryByAlias(alias: string | string[] | undefined): ICategory | undefined {
    if(typeof alias == "string") {
      return category.value.find( c => c.alias == alias)
    }
    return
  }
  return { category, fetchCategory, createCategory, getCategoryByAlias, updateCategory, deleteCategory }
})
