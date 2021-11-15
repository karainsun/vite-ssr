<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  asyncData() {
    return Promise.resolve();
  } 
});
</script>
<style lang="scss"></style>
