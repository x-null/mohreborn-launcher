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
          icon: require("@/assets/icons/home.svg"),
        },
        {
          id: 2,
          name: "serverlist",
          routerlink: "/serverlist",
          icon: require("@/assets/icons/menu.svg"),
        },
        {
          id: 3,
          name: "content",
          routerlink: "/content",
          icon: require("@/assets/icons/download.svg"),
        },
        {
          id: 4,
          name: "options",
          routerlink: "/options",
          icon: require("@/assets/icons/options.svg"),
        },
        {
          id: 5,
          name: "settings",
          routerlink: "/settings",
          icon: require("@/assets/icons/settings.svg"),
        },
      ],
    };
  },
  components: {
    MenuItem,
  },
};
</script>

<style>
.menu-list a:hover {
  /*box-shadow: #444 0 0 0px !important;*/
  background-color: transparent !important;
  border-left: 0.25em solid #F3E002 !important;
  border-radius: 0;
  padding-left: .50em;
}
</style>
