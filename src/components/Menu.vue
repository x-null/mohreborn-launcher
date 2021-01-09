<template>
  <aside class="menu">
    <ul class="menu-list">
      <MenuItem
        v-for="menuitem in menuitems"
        :menuitem="menuitem"
        :key="menuitem.id"
      ></MenuItem>
    </ul>
  </aside>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "menu",
  data() {
    return {
      menuitems: [
        {
          id: 1,
          name: "home",
          routerlink: "/",
          icon: "fas fa-home fa-lg",
        },
        {
          id: 2,
          name: "serverlist",
          routerlink: "/serverlist",
          icon: "fas fa-list fa-lg",
        },
        {
          id: 3,
          name: "content",
          routerlink: "/content",
          icon: "fas fa-tools fa-lg",
        },
        {
          id: 4,
          name: "settings",
          routerlink: "/settings",
          icon: "fas fa-cog fa-lg",
        },
      ],
    };
  },
  components: {
    MenuItem,
  },
};
</script>

<style scoped>
</style>
