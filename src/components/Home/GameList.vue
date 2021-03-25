<template>
<div class="flex flex-row">
    <GameCard class="my-4" v-for="(game, index) in games" :key="index" :game="game" />
</div>
  
</template>

<script>
import GameCard from "@/components/Home/GameCard.vue";
export default {
  components: {
    GameCard,
  },
  data() {
    return {
      games: [
        {
          name: "Allied Assault",
          cover_img: "/images/AA.jpg",
          version: "v1.11",
        },
        {
          name: "Spearhead",
          cover_img: "/images/SH.jpg",
          version: "v2.15",
        },
        {
          name: "Breakthrough",
          cover_img: "/images/BT.jpg",
          version: "v2.40",
        },
      ],
    };
  },
};
</script>

<style>
</style>