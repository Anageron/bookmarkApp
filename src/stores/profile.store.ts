import type { IProfile } from "@/Interfaces/Profile.interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_ROUTES, client } from '../api';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>()

  async function fetchProfile () {
  const { data } = await client().get<IProfile>(API_ROUTES.auth.profile)
  profile.value = data
}
  return {profile, fetchProfile}
})
