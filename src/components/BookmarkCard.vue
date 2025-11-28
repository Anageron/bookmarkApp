<script setup lang="ts">
import type { IBookMark } from '@/Interfaces/bookmart.interfaces'
import ButtonIconBig from './ButtonIconBig.vue'
import IconDeleteWhite from '@/Icons/IconDeleteWhite.vue'
import IconLink from '@/Icons/IconLink.vue'

const { title, image } = defineProps<IBookMark>()
</script>

<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="bookmark-card__title">
      {{ title }}
    </div>

    <div class="bookmark-card__footer">
      <ButtonIconBig>
        <IconDeleteWhite />
      </ButtonIconBig>
      <ButtonIconBig>
        <IconLink />
      </ButtonIconBig>
    </div>
  </div>
</template>

<style scoped>
.bookmark-card {
  max-width: 400px;
  border-radius: 30px;
  box-shadow: 0 10px 10px 0 rgba(245, 245, 247, 0.1);
  background: var(--color-fg);
  padding: 20px;
  display: flex;
  flex-direction:column;
  gap: 24px;
}

.bookmark-card__image{
  min-height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}

.bookmark-card__title {
  color: var(--color-bg);
  font-weight: 500;
  font-size: 16px;
}

.bookmark-card__footer{
  display: flex;
  justify-content: space-between;
}
</style>
