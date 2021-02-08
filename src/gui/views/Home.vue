<template>
  <div class="home">
    <el-row :gutter="25">
      <el-col :span="16">
        <h1>News</h1>
        <NewsCard />
      </el-col>
      <el-col :span="8">
        <h1>Play</h1>
        <Friends />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsCard from "@/gui/components/NewsCard.vue";
import Friends from "@/gui/components/Friends.vue";

@Options({
  components: {
    NewsCard,
    Friends
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
h1{
  padding-bottom: 20px;;
}
</style>>
