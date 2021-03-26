<template>
<section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        General settings
    </h2>

    <form>
        <div class="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-1">
            <div class="w-100">
                <label class="text-gray-700 dark:text-gray-200" for="username">Installation Path</label>
                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <input type="text" placeholder="" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10" />
                </div>
            </div>

            <div>
                <label class="flex justify-start items-start">
                    <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                        <input type="checkbox" class="opacity-0 absolute">
                        <svg class="fill-current hidden w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                    </div>
                    <div class="select-none">Skip intro</div>
                </label>
            </div>
            <div>
                <label class="flex justify-start items-start">
                    <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                        <input type="checkbox" class="opacity-0 absolute">
                        <svg class="fill-current hidden w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                    </div>
                    <div class="select-none">Show FPS</div>
                </label>
            </div>

        </div>

        <div class="flex justify-end mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
            </button>
        </div>
    </form>
</section>
</template>

<script>
export default {};
</script>

<style>
input:checked+svg {
    display: block;
}
</style>
