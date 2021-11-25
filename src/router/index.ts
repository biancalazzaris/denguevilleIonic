import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tabs from "../views/Tabs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3.vue"),
      },
      {
        path: "denuncia",
        component: () => import("@/views/Denuncia.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
