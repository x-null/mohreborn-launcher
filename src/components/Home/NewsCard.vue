<template>
  <div
    class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
  >
    <div class="flex items-center justify-between">
      <span class="text-sm font-light text-gray-600 dark:text-gray-400"
        >{{ post.date }}</span
      >
      <a
        class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
        >{{ post.category }}</a
      >
    </div>

    <div class="mt-2">
      <a
        href="#"
        class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >{{ post.title }}</a
      >
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        {{ post.short_desc }}
      </p>
    </div>

    <div class="flex items-center justify-between mt-4">
      <a :href="post.link" class="text-blue-600 dark:text-blue-400 hover:underline"
        >Read more</a
      >

      <div class="flex items-center">
        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
          > {{ post.author }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "NewsCard",
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
</style>