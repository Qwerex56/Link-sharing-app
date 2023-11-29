import Profile from "@/modules/types/ProfileType";
import { get } from "@vueuse/core";
import { defineStore } from "pinia";
import { Ref, computed, ref } from "vue";

const useProfileStore = defineStore("profileStore", () => {
  const userProfile: Ref<Profile> = ref({
    name: "",
    surname: "",
    email: "",
    profilePicture: null
  } as Profile);

  const setName = (name: string) => get(userProfile).name = name;

  const setSurname = (surname: string) => get(userProfile).surname = surname;

  const setEmail = (email: string) => get(userProfile).email = email;

  const setProfilePicture = (pict: string) => {
    if (get(userProfile) === undefined) {
      return;
    }

    get(userProfile).profilePicture = pict;
  }

  const getFullName = computed(() => {
    const profile = get(userProfile);
    const name = profile.name;
    const surname = profile.surname;

    return name + " " + surname;
  });

  const getEmail = computed(() => get(userProfile).email);

  const getProfilePicture = computed(() => get(userProfile).profilePicture);

  return {
    userProfile,
    getFullName,
    getEmail,
    getProfilePicture,
    setName,
    setSurname,
    setEmail,
    setProfilePicture,
  }
});

export default useProfileStore;