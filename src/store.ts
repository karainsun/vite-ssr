import { InjectionKey } from "vue";
import { RouteLocationNormalized } from "vue-router";
import { createStore as _createStore, Store } from "vuex"; 
import { articleArchives } from "@/request";
 
export interface State {
  client: string[];
  mock: string[];
  posts: Array<any>;
}

export interface AsyncDataParam {
  store: Store<State>;
  route: RouteLocationNormalized;
}

// 文章类型
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

// injection key
export const key: InjectionKey<Store<State>> = Symbol();

export function createStore() {
  const store = _createStore<State>({
    state: {
      client: [],
      mock: [],
      posts: [],
    },
    mutations: { 
      mockData(state, data) {
        state.mock = data;
      },
      getAllPosts(state, data: Array<NewPostsProps>) {
        state.posts = data;
      },
    },
    actions: { 
      mockData({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit("mockData", ["Angular", "Vue", "React"]);
            resolve(true);
          }, 20);
        });
      }, 
      getAllPosts({ commit }) {
        return articleArchives().then((res) => {
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
