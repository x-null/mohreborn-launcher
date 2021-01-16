<template>
  <div :id="item.id" @click="onClick()">
    <font-awesome-icon :icon="item.icon" />
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {TitleBarItem} from "@/gui/components/titlebar/TitleBarItem";
import {PropType} from 'vue';

@Options({
  props: {
    item: {
      type: Object as PropType<TitleBarItem>
    }
  }
})
export default class TitleBarItemVue extends Vue {
  item!: TitleBarItem

  onClick() {
    this.item.handle();
  }
}
</script>

<style scoped>
</style>
