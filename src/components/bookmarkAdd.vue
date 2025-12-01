<script setup lang="ts">
import { ref } from 'vue'
import ButtonIcon from './ButtonIcon.vue'
import IconAdd from '@/Icons/IconAdd.vue'
import InputDefault from './InputDefault.vue'
import IconOK from '@/Icons/IconOK.vue'
import { useBookmarkStore } from '@/stores/bookmark.store'

const { category_id } = defineProps<{category_id: number }>()
const isEdited = ref<boolean>(false)
const newUrl = ref<string>()
const bookmarkStore = useBookmarkStore();

function toogleIsEdited() {

  isEdited.value = !isEdited.value
}

function addBookmark() {
   if(!newUrl.value) return
   console.log(category_id, newUrl.value)
  bookmarkStore.addBookmark(category_id, newUrl.value)
  newUrl.value = "";
}
</script>
<template>
  <div class="bookmark-add">
    <ButtonIcon :size="48" v-if="!isEdited" @click="toogleIsEdited">
      <IconAdd />
    </ButtonIcon>
    <div v-else class="link-add">
      <InputDefault v-model="newUrl" is-focused/>
      <ButtonIcon :size="48" @click="addBookmark">
        <IconOK />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.bookmark-add {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--color-fg);
  border-radius: 30px;
}

.link-add{
  display: flex;
  gap: 8px;
}
</style>
