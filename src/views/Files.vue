<template>
<div class="my-6">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white">Files</h1>
    <div v-if="show_mods">
        <p>mods</p>
    </div>
    <div v-if="show_maps">
        <p>maps</p>
    </div>
</div>
</template>

<script>
export default {
    name: "Files",
    components: {

    },
    data: function () {
        return {
            show_maps: false,
            show_mods: true
        }
    }
};
</script>
