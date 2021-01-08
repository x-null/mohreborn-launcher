<template>
  <div id="titlebar">
    <TitleBarItem v-for="titlebaritem in titlebaritems" :titlebaritem="titlebaritem" :key="titlebaritem.id"></TitleBarItem>
  </div>
</template>

<script>
import TitleBarItem from "./TitleBarItem.vue";

export default {
  name: "titlebar",
    data() {
    return {
      titlebaritems: 
      [{
                 id: 1,
                 name: "minimize",
                 icon: "far fa-window-minimize",
      },
      {
                 id: 2,
                 name: "maximize",
                 icon: "far fa-square",
      },
      {
                 id: 2,
                 name: "close",
                 icon: "fas fa-times",
      }]
    };
  },
  components: {
    TitleBarItem
  }
};
</script>

<style scoped>

</style>
