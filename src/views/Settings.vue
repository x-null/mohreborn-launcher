<template>
<div class="my-6">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white">Game Settings</h1>
    <div class="my-6 flex flex-row">
        <GeneralSettings />
        <ScreenSettings />
        <MultiplayerSettings />
    </div>
</div>
</template>

<script>
import ScreenSettings from "@/components/Settings/ScreenSettings.vue"
import GeneralSettings from "@/components/Settings/GeneralSettings.vue"
import MultiplayerSettings from "@/components/Settings/MultiplayerSettings.vue"
export default {
    name: "Settings",
    components: {
        GeneralSettings,
        ScreenSettings,
        MultiplayerSettings
    },
};
</script>
