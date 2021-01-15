<template>
  <div
    @click="menuitemhandler(titlebaritem.name)"
    :id="titlebaritem.id"
  >
    <font-awesome-icon :icon="titlebaritem.icon"></font-awesome-icon>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {TitleBarItem} from "@/components/titlebar/TitleBarItem";
import { PropType } from 'vue';

@Options({
  props: {
    titlebaritem: {
      type: Object as PropType<TitleBarItem>
    }
  }
})
export default class TitleBarItemVue extends Vue {
  titlebaritem!: TitleBarItem

  menuitemhandler(name: string) {
    let ipc = window.ipcRenderer ? window.ipcRenderer : { send: function () {} };
    if (name == "minimize") ipc.send("minimize-me");
    if (name == "maximize") ipc.send("maximize-me");
    if (name == "close") ipc.send("close-me");
  }
}
</script>

<style scoped>
</style>
