import type { IProfile } from "@/Interfaces/Profile.interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_ROUTES, http } from '../api';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>()

  async function fetchProfile () {
  const { data } = await http.get<IProfile>(API_ROUTES.profile)
  profile.value = data
}
  return {profile, fetchProfile}
})
