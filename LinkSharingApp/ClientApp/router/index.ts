import { createRouter, createWebHashHistory } from "vue-router";

import LoginPageVue from "@/views/LoginPage.vue";
import SignupPageVue from "@/views/SignupPage.vue";
import LinkCustomization from "@/views/LinkCustomization.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: LoginPageVue },
    { path: "/Signup", component: SignupPageVue },
    { path: "/LinkCustomization", component: LinkCustomization }
  ],
});

export default router;
