<template>
  <div class="titlebar">
    <div class="title"></div>
    <div class="controls">
      <TitleBarItemVue
          v-for="item in titlebaritems"
          :titlebaritem="item"
          :key="item.id"
          class="control-item"
      ></TitleBarItemVue>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import TitleBarItemVue from "./TitleBarItem.vue";
import {TitleBarItem} from "@/gui/components/titlebar/TitleBarItem";

@Options({
  components: {
    TitleBarItemVue
  }
})
export default class TitleBarVue extends Vue {
  titlebaritems: TitleBarItem[] = [
    {
      id: 1,
      name: "minimize",
      icon: ["far", "window-minimize"]
    },
    {
      id: 2,
      name: "maximize",
      icon: ["far", "square"]
    },
    {
      id: 2,
      name: "close",
      icon: ["fas", "times"]
    }
  ]
}
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
    display: flex;
    align-items: center;
    float: right;

    .control-item {
      -webkit-app-region: no-drag;
      margin-right: 5px;
      color: #ffffff;

      &:hover {
        color: #dfe4ea;
      }
    }
  }
}
</style>
