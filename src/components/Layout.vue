<template>
  <div :class="darkmode ? 'dark' : ''" class="flex h-screen w-screen flex">
    <Header @darkmode="darkmodeValue" />
    <div class="dark:bg-gray-900 flex-grow">
      <main class="container flex-grow mx-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header.vue";

export default {
  components: {
    Header,
  },
  data: function () {
    return {
      darkmode: false,
    };
  },
  methods: {
    darkmodeValue: function (params) {
      this.darkmode = params;
      localStorage.setItem("darkmode", this.darkmode.toString());
    },
  },
  mounted() {
    const mode = localStorage.getItem("darkmode");
    if (mode) {
      if (mode == "true") {
        this.darkmode = true;
      } else {
        this.darkmode = false;
      }
    }
  },
};
</script>