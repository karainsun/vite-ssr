<template>
  <router-link to="/">HOME</router-link> |
  <router-link to="/client">请求</router-link> |
  <router-link to="/mock">模拟</router-link>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup(props, context) {
    return {};
  },
});
</script>
<style lang="scss"></style>
