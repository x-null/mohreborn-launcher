<template>
  <router-link v-bind:to="menuitem.routerlink">
    <span :id="menuitem.id" class="icon has-text-black">
      <i v-bind:class="menuitem.icon"></i>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "menuitem",
  props: ["menuitem"],
};
</script>

<style scoped>
</style>
