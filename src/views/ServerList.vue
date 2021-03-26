<template>
  <div class="my-6">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-white">Serverlist</h1>
    <Table />
  </div>
</template>

<script>
import Table from "@/components/ServerList/Table.vue"
export default {
  name: "ServerList",
  components: {
    Table,
  },
};
</script>
