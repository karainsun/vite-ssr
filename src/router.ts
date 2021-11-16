import {
  createWebHistory,
  createRouter as _createRouter,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/client",
    component: () => import("./views/Client.vue"),
  },
  {
    path: "/mock",
    component: () => import("./views/Mock.vue"),
  },
];

export function createRouter() {
  return _createRouter({ 
    history: (import.meta as any).env.SSR
      ? createMemoryHistory()
      : createWebHistory(),
    routes,
  });
}
