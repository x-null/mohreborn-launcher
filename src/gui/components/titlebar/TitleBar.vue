<template>
  <div class="titlebar">
    <div class="title" />
    <div class="controls">
      <TitleBarItemVue
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="control-item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import TitleBarItemVue from "./TitleBarItem.vue";
import {DEFAULT_TITLEBAR_ITEMS, TitleBarItem} from "@/gui/components/titlebar/TitleBarItem";

@Options({
  components: {
    TitleBarItemVue
  }
})
export default class TitleBarVue extends Vue {
  items: TitleBarItem[] = DEFAULT_TITLEBAR_ITEMS;
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
