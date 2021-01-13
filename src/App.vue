<template>
<div class="common-layout">
  <el-container>
    <el-header>    <TitleBar /></el-header>
    <el-container>
      <el-aside width="200px"><Menu /></el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  </div>
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

</style>
