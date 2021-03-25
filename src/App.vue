<template>
  <div>
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>
