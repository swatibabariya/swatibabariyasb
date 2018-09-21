<template>
  <div>
    <header-comp></header-comp>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import header from "./header.vue";
export default {
  components: {
    "header-comp": header
  }
};
</script>

<style>
</style>