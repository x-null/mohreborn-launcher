<template>
  <div style="-webkit-app-region: drag;">
    <div class="level">
      <span class="level-left"></span>
      <TitleBar />
    </div>
  </div>

  <div class="columns">
    <div class="column is-narrow">
      <Menu />
    </div>
    <div class="column is-11">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import TitleBar from "@/components/TitleBar.vue";
export default {
  name: "app",
  components: {
    Menu,
    TitleBar,
  },
};
</script>

<style>
@import "../node_modules/bulma/css/bulma.min.css";

@font-face {
  font-family: "Fira Sans Normal";
  src: url("./assets/fonts/Fira_Sans/FiraSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans Bold";
  src: url("./assets/fonts/Fira_Sans/FiraSans-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

::-webkit-scrollbar {
  display: none;
}

html {
  /* background: #141e30; 
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); 
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  );  */
  height: 100%;
}

body {
  height: 100%;
  width: 100vw;
  font-family: "Fira Sans Normal", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media print, screen and (min-width: 769px) {
  .level-left .level-item:not(:last-child),
  .level-right .level-item:not(:last-child) {
    margin-right: 0 !important;
  }
}
</style>
