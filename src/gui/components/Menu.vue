<template>
  <aside class="menu">
    <ul class="menu-list">
      <MenuItem
        v-for="menuitem in menuitems"
        :key="menuitem.id"
        :menuitem="menuitem"
      />
    </ul>
  </aside>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "Menu",
  components: {
    MenuItem,
  },
  data() {
    return {
      menuitems: [
        {
          id: 1,
          name: "home",
          routerlink: "/",
          icon: require("@/gui/assets/icons/home.svg"),
        },
        {
          id: 2,
          name: "serverlist",
          routerlink: "/serverlist",
          icon: require("@/gui/assets/icons/menu.svg"),
        },
        {
          id: 3,
          name: "content",
          routerlink: "/content",
          icon: require("@/gui/assets/icons/download.svg"),
        },
        {
          id: 4,
          name: "options",
          routerlink: "/options",
          icon: require("@/gui/assets/icons/options.svg"),
        },
        {
          id: 5,
          name: "settings",
          routerlink: "/settings",
          icon: require("@/gui/assets/icons/settings.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-inline-start: 10px !important;
}

.menu-list a:hover {
  background-color: transparent !important;
  border-left: 0.25em solid #f3e002 !important;
  border-radius: 0;
}


</style>
