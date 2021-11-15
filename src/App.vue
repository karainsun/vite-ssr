<template>
  <router-link to="/">HOME</router-link> |
  <router-link to="/client">Client</router-link> |
  <router-link to="/test">Test</router-link>
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
