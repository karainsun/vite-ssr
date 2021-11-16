<template>
  <h3>模拟</h3>
  <ul>
    <li v-for="m in mock" :key="m">{{ m }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key, State } from "../store";
export default defineComponent({
  asyncData({ store, route }: any) {
    return store.dispatch("mockData");
  },
  setup(props, context) {
    const { mock } = useStore<State>(key).state;

    return {
      mock,
    };
  },
});
</script>
<style lang="scss"></style>
