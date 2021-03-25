<template>
  <div class="my-6">
    <div class="flex flex-wrap">
      <div class="flex-grow">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white">News</h1>
        <NewsList />
        </div>
      <div class="flex-grow pl-4">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white">Play</h1>
        <GameList />
        </div>
    </div>
  </div>
</template>

<script>
import GameList from "@/components/Home/GameList.vue";
import NewsList from "@/components/Home/NewsList.vue";
export default {
  name: "Home",
  components: {
    GameList,
    NewsList,
  },
};
</script>
