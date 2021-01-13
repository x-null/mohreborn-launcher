<template>
  <div class="titlebar">
    <div class="title"></div>
    <div class="controls">
      <TitleBarItem
        v-for="titlebaritem in titlebaritems"
        :titlebaritem="titlebaritem"
        :key="titlebaritem.id"
        class="control-item"
      ></TitleBarItem>
    </div>
  </div>
</template>

<script>
import TitleBarItem from "./TitleBarItem.vue";

export default {
  name: "titlebar",
  data() {
    return {
      titlebaritems: [
        {
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
        },
      ],
    };
  },
  components: {
    TitleBarItem,
  },
};
</script>

<style lang="scss" scoped>
.titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
  box-sizing: border-box;

  .title {
    display: inline-block;
  }
  .controls {
    display: inline-block;
    float: right;

    .control-item {
      -webkit-app-region: no-drag;
      color: #ffffff;
      &:hover {
        color: #dfe4ea;
      }
    }
  }
}
</style>
