<template>
  <li>
    <router-link v-bind:to="menuitem.routerlink">
      <span :id="menuitem.id" class="icon">
        <img v-bind:src="menuitem.icon" />
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
  /*padding: 2em;
  margin: -2em;*/
}
/* .active {
  -webkit-box-shadow: inset 199px 0px 300px -18px rgba(0, 0, 0, 0.75);
  box-shadow: inset 199px 0px 300px -18px rgba(0, 0, 0, 0.75);
} */

/* .icon>i:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 50%;
  top: 0;
  left:0;
  box-shadow: 0 100px 5px 5px;
  z-index: -1;
} */
</style>
