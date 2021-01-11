<template>
  <div v-on:click="menuitemhandler(titlebaritem.name)" :id="titlebaritem.id" class="icon">
    <i v-bind:class="titlebaritem.icon"></i>
  </div>
</template>

<script>
const { ipcRenderer } = window.require ? window.require("electron") : {send: function(){}};

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
