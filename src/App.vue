<template>
  <section>
    <TitleBar />
  </section>
  <section>
    <div class="columns">
      <div class="column is-narrow">
        <Menu />
      </div>
      <div class="column view">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import Menu from "@/components/Menu.vue";
import TitleBar from "@/components/TitleBar";
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

body {
  font-family: "Fira Sans Normal", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view {
  margin-right: 0.75rem;
  height: 70vh;
  overflow-y: auto;
}

@media print, screen and (min-width: 769px) {
  .level-left .level-item:not(:last-child),
  .level-right .level-item:not(:last-child) {
    margin-right: 0 !important;
  }
}
</style>
