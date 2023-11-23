import { createRouter, createWebHashHistory } from "vue-router";

import LoginPageVue from "@/views/LoginPage.vue";
import SignupPageVue from "@/views/SignupPage.vue";
import LinkCustomization from "@/views/LinkCustomizationPage.vue";
import ProfileDetailsPage from "@/views/ProfileDetailsPage.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: LoginPageVue },
    { path: "/Signup", component: SignupPageVue },
    { path: "/LinkCustomization", component: LinkCustomization },
    { path: "/ProfileDetails", component: ProfileDetailsPage },
  ],
});

export default router;
