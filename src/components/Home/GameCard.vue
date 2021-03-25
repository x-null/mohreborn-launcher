<template>
<div class="flex flex-col items-center justify-center max-w-sm mx-auto">
    <img :src="game.cover_img" class="w-56 h-64 bg-gray-300 bg-center rounded-lg shadow-md" />
    <div class="w-48 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-48 dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {{ game.name }}
        </h3>
        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">{{ game.version }}</span>
            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Play
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "GameCard",
    props: {
        game: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
</style>
