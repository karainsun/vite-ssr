<template>
  <div>
    <h3>请求</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, } from "vue";
import { useStore } from "vuex";
import { key, State } from "../store"; 

export default defineComponent({
  asyncData({ store, router }: any) {
    return store.dispatch("getAllPosts");
  },
  setup() {
    const store = useStore<State>(key);
    const posts = computed(() => store.state.posts); 

    return {
      posts
    };
  },
});
</script>
<style lang="scss"></style>
