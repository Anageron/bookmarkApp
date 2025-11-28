import { API_ROUTES, client } from "@/api"
import type { ILoginResponse } from "@/Interfaces/auth.interfaces"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

const TOKEN_STORE_KEY = 'token-storage'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()
  const initalValue = localStorage.getItem(TOKEN_STORE_KEY)

  if(initalValue){
    token.value = initalValue;
  }

  function setToken(newToken:string) {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  }

  function clearToken(){
    token.value = undefined
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  const getToken = computed(() => token.value)

  async function login (email: string, password: string) {
  const { data } = await client().post<ILoginResponse>(API_ROUTES.auth.login, {
    email,
    password
  })
  setToken(data.token)
}
  return {getToken, login, setToken, clearToken}
})
