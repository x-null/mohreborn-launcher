<template>
  <li>
    <router-link v-bind:to="menuitem.routerlink">
      <span :id="menuitem.id" class="icon has-text-black">
        <i v-bind:class="menuitem.icon"></i>
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "menuitem",
  props: ["menuitem"],
};
</script>

<style scoped>
router-link {
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 2em;
  margin: -2em;
}
.active{
  background-color: aqua;
}
</style>
