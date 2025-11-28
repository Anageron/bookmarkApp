<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import InputDefault from '@/components/InputDefault.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const form = ref<{email?: string, password?: string}>({});
const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if(authStore.getToken) {
      router.push({name: 'main'})
    }
  }
)


function onSubmit(e:Event) {
  e.preventDefault();
  if(!form.value.email || !form.value.password) {
    return
  }
  authStore.login(form.value.email, form.value.password)
  form.value = {}

}

</script>

<template>
  <div class="auth">
    <h1 class="auth__header">Bookmarkly</h1>
    <form class="auth__form" @submit="onSubmit">
      <InputDefault v-model="form.email" placeholder="Email" />
      <InputDefault v-model="form.password" placeholder="Пароль" type="password" />
      <ButtonText type="submit">
        Вход
      </ButtonText>
    </form>
  </div>
</template>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 52px;
}

.auth__form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.auth__header {
  font-size: 52px;
  font-weight: 700;
}
</style>
