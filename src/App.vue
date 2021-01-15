<template>
  <div class="common-layout">
    <el-container>
      <el-header><TitleBarVue /></el-header>
      <el-container>
        <el-aside width="50px"><Menu /></el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import TitleBarVue from "@/components/titlebar/TitleBar";
export default {
  name: "app",
  components: {
    Menu,
    TitleBarVue,
  },
};
</script>

<style lang="scss">
@import "styles";

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

/* ::-webkit-scrollbar {
  display: none;
} */

html,
body {
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

  color: white;
}

h1{
  font-size: 3rem;
}
h1,h2,h3{
  margin:0;
}


.el-header{
  height: 100% !important;
  padding: 0;
}

.el-main{
  height: 80vh;
}
</style>