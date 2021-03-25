<template>
  <div class="flex flex-col w-full">
    <NewsCard class="w-full my-4" v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script>
import NewsCard from "@/components/Home/NewsCard.vue";
export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      posts: [
        {
          date: "21/03/2021",
          category: "Development",
          title: "Post title",
          short_desc: "Post short description...",
          link: "https://x-null.net",
          author: "James",
        },
        {
          date: "21/03/2021",
          category: "Development",
          title: "Post title",
          short_desc: "Post short description...",
          link: "https://x-null.net",
          author: "James",
        },
        {
          date: "21/03/2021",
          category: "Development",
          title: "Post title",
          short_desc: "Post short description...",
          link: "https://x-null.net",
          author: "James",
        },
        {
          date: "21/03/2021",
          category: "Development",
          title: "Post title",
          short_desc: "Post short description...",
          link: "https://x-null.net",
          author: "James",
        },
      ],
    };
  },
};
</script>

<style>
</style>