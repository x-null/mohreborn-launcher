<template>
  <span v-on:click="menuitemhandler(titlebaritem.name)" :id="titlebaritem.id" class="icon has-text-black">
    <i v-bind:class="titlebaritem.icon"></i>
  </span>
</template>

<script>
const { ipcRenderer } = window.require("electron");

export default {
  name: "titlebaritem",
  props: ["titlebaritem"],
  methods: {
    menuitemhandler(name) {
      console.log(name);
        if (name == "minimize") ipcRenderer.send('minimize-me');
        if (name == "maximize") ipcRenderer.send('maximize-me');
        if (name == "close") ipcRenderer.send('close-me');
    },
  },
};
</script>

<style scoped>
</style>
