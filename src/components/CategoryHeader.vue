<script setup lang="ts">
import type { ICategory } from '@/Interfaces/Category.interfaces'
import ButtonIcon from './ButtonIcon.vue'
import IconEdit from '@/Icons/IconEdit.vue'
import { ref } from 'vue'
import InputDefault from './InputDefault.vue'
import IconOK from '@/Icons/IconOK.vue'
import IconDelete from '@/Icons/IconDelete.vue'
import { useCategoryStore } from '@/stores/category.store'
import { useRouter } from 'vue-router'

const { category } = defineProps<{ category: ICategory }>()
const isEdited = ref<boolean>()
const newCategoryName = ref<string>(category.name)
const categoryStore = useCategoryStore();
const router = useRouter();

function toggleEdit() {
  isEdited.value = !isEdited.value
}

function updateCategory(){
  if(!newCategoryName.value) return
  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id)
  toggleEdit();
}

function deleteCategory() {
  categoryStore.deleteCategory(category.id);
  router.push({name: 'main'})
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited">{{ category.name }}</h1>
    <div v-if="isEdited" class="category-header__edit">
      <InputDefault v-model="newCategoryName" is-focused/>
      <ButtonIcon @click="updateCategory">
        <IconOK />
      </ButtonIcon>
    </div>
    <div class="category-header__actions">
      <ButtonIcon v-if="!isEdited" @click="toggleEdit">
        <IconEdit />
      </ButtonIcon>
      <ButtonIcon @click="deleteCategory">
        <IconDelete />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  margin-block-end: 68px;
}
.category-header__edit,
.category-header__actions {
  display: flex;
  gap: 8px;

}
</style>
