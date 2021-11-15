<template>
  <div>
    <h3>模拟</h3>
    <ul>
      <li v-for="s in server" :key="s">{{ s }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key, State } from "../store";
export default defineComponent({
  asyncData({ store, route }: any) {
    return store.dispatch("testData");
  },
  setup(props, context) {
    const { server } = useStore<State>(key).state;

    return {
      server,
    };
  },
});
</script>
<style lang="scss"></style>
