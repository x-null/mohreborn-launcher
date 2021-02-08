<template>
  <el-row>
    <el-col :span="24" v-for="o in 5" :key="o">
      <el-card :body-style="{ padding: '0px' }" class="card">
        <div style="padding: 14px">
          <div>
            <el-tag>RazorRapid</el-tag>
            <time class="time">32d ago</time>
          </div>
          <h2>Join the hunt to the hackers, together with xNULL</h2>
        </div>
        <img
          src="https://pingperfect.com/gameservers/img/icons/mohaa.jpg"
          class="image"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { Vue } from "vue-class-component";

export default class NewsCard extends Vue {
  mounted() {
    this.calcDate();
  }

  calcDate() {}
}
</script>
    
<style scoped>
.card {
  margin-bottom: 3vh;
}
.time {
  font-size: 13px;
  color: #999;
  margin-left:5px;
}

.image {
  width: 100%;
  display: block;
}

h2{
    padding-top:5px;
}
</style>