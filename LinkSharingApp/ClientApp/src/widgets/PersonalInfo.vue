<template>
  <InnerPageContainer class="p-4 bg-gray-light">
    <TextField
      input-type="text"
      place-hldr="e.g. Ben"
      :input-icon="profileIco"
      :model-value="nameRef"
      :validation-schema="nameValidator"
      @on-change="ev => userProfile.name = ev"
    >
      <template #TextFieldType>
        First name*
      </template>
    </TextField>
    <TextField
      input-type="text"
      place-hldr="e.g. Wright"
      :input-icon="profileIco"
      :model-value="surnameRef"
      :validation-schema="surnameValidator"
      @on-change="ev => userProfile.surname = ev"
    >
      <template #TextFieldType>
        Last name*
      </template>
    </TextField>
    <TextField
      input-type="email"
      place-hldr="e.g. ben.wright@gmail.com"
      :input-icon="emailIco"
      :model-value="emailRef"
      :validation-schema="emailValidator"
      @on-change="ev => userProfile.email = ev"
    >
      <template #TextFieldType>
        Email
      </template>
    </TextField>
  </InnerPageContainer>
</template>

<script setup lang="ts">
import InnerPageContainer from '@/components/utilities/InnerPageContainer.vue';
import TextField from '@/components/Inputs/TextField.vue';

import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

import useProfileStore from "@/stores/profileStore";
import { storeToRefs } from 'pinia';

import emailIco from '@/assets/Icons/icon-email.svg';
import profileIco from '@/assets/Icons/icon-profile-details-header.svg';
import { get } from '@vueuse/core';
import { ref } from 'vue';

const { userProfile } = storeToRefs(useProfileStore());

const nameRef = ref(get(userProfile).name);
const surnameRef = ref(get(userProfile).surname);
const emailRef = ref(get(userProfile).email);

const nameValidator = toTypedSchema(z.string().min(2));
const surnameValidator = toTypedSchema(z.string().min(2));
const emailValidator = toTypedSchema(z.string().email().min(2));
</script>
