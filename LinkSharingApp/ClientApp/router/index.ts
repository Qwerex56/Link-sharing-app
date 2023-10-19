import { createRouter, createWebHashHistory } from "vue-router";

import LoginPageVue from "@/views/LoginPage.vue";
import SignupPageVue from "@/views/SignupPage.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: LoginPageVue },
    { path: "/Signup", component: SignupPageVue },
  ],
});

export default router;
