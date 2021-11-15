// store.ts
import { InjectionKey } from "vue";
import { RouteLocationNormalized } from "vue-router";
import { createStore as _createStore, Store } from "vuex"; 
import { getJson } from "@/request";

// 为 store state 声明类型
export interface State {
  client: string[];
  server: string[];
  posts: Array<any>;
}

export interface AsyncDataParam {
  store: Store<State>;
  route: RouteLocationNormalized;
}

// 最新文章接口
export interface NewPostsProps {
  image?: Array<{ name: string; url: string }> | string;
  tags: Array<string>;
  id: number;
  title: string;
  description: string;
  category: string;
  isComent: boolean;
  isReprint: boolean;
  content: string;
  created_at: string;
}

// // 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export function createStore() {
  const store = _createStore<State>({
    state: {
      client: [],
      server: [],
      posts: [],
    },
    mutations: { 
      setServer(state, data) {
        state.server = data;
      },
      getAllPosts(state, data: Array<NewPostsProps>) {
        state.posts = data;
      },
    },
    actions: { 
      testData({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit("setServer", ["vite", "express", "serialize-javascript"]);
            resolve(true);
          }, 20);
        });
      },
      // 全部文章
      getAllPosts({ commit }) {
        return getJson().then((res) => {
          commit("getAllPosts", res.data);
        });
      },
    },
  });
  // 替换state
  // @ts-ignore
  if (!import.meta.env.SSR && window && window.__INITIAL_STATE__) {
    // @ts-ignore
    store.replaceState(window.__INITIAL_STATE__);
  }

  return { store };
}
