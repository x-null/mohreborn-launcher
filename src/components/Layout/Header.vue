<template>
  <div class="bg-gray-200">
    <aside
      class="flex flex-col items-center bg-white text-gray-700 shadow h-full"
    >
      <div class="h-16 flex items-center w-full">
        <!-- Logo Section -->
        <a class="h-6 w-6 mx-auto" href="/">
          <img
            class="h-6 w-6 mx-auto"
            src="http://i.imgur.com/q9DPa9A.png"
            alt="logo"
          />
        </a>
      </div>

      <ul>
        <!-- Items Section -->
        <li class="hover:bg-gray-100">
          <router-link
            to="/"
            class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </router-link>
        </li>

        <li class="hover:bg-gray-100">
          <router-link
            to="/serverlist"
            class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </router-link>
        </li>

        <li class="hover:bg-gray-100">
          <router-link
            to="/files"
            class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </router-link>
        </li>

        <li class="hover:bg-gray-100">
          <router-link
            to="/settings"
            class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </router-link>
        </li>
      </ul>

      <div class="mt-auto h-16 flex items-center w-full">
        <!-- Action Section -->
        <button
          class="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:outline-none"
        >
          <div class="relative inline-block">
            <img
              class="inline-block object-cover w-12 h-12 rounded-full"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <span
              class="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"
            ></span>
          </div>
        </button>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      open: false,
      darkmode: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    toggleDarkmode() {
      this.darkmode = !this.darkmode;
    },
  },
  watch: {
    darkmode: function () {
      this.$emit("darkmode", this.darkmode);
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

<style scoped>
</style>