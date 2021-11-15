import {
  createWebHistory,
  createRouter as _createRouter,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
	},
  {
    path: "/home",
    component: () => import("./views/Home.vue"),
    children: [
      {
        path: "/client",
        component: () => import("./views/Client.vue"),
      },
      {
        path: "/test",
        component: () => import("./views/Test.vue"),
      },
    ],
  },
];

export function createRouter() {
  return _createRouter({
    // history: import.meta.env.SSR ? createMemoryHistory("/ssr") : createWebHistory("/ssr"),
    history: (import.meta as any).env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
