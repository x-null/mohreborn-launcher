<template>
  <section>
    <header>
      <TitleBar />
    </header>
    <main>
      <div class="menu">
        <Menu />
      </div>
      <div class="content">
        <router-view />
      </div>
<!--      <div class="columns">
        <div class="column is-narrow">

        </div>
        <div class="column view">

        </div>
      </div>-->
    </main>
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

html, body {
  overflow-x: hidden;
  overflow-y: hidden;
}

body {
  background: -webkit-linear-gradient(
    17deg,
    rgba(51, 74, 136, 1) 0%,
    rgba(66, 112, 179, 1) 100%
  );
  background: linear-gradient(
    17deg,
    rgba(51, 74, 136, 1) 0%,
    rgba(66, 112, 179, 1) 100%
  );

  font-family: "Fira Sans Normal", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

section main {
  flex: 1;
  height: 100%;
  display: flex;
}

section main .menu, .content {
  height: 100%;
}

section main .content {
  flex: 1;
  padding: 0 .75em .75em .75em;
}

</style>