<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h3>Online Friends</h3>
        <span>4 of 23</span>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "Friend" + o }}
    </div>
  </el-card>
</template>

<script>
import { Vue } from "vue-class-component";

export default class FriendsList extends Vue {}
</script>
    
<style>
.box-card {
  margin-top: 20px;
  display: block;
  width: 100%;
  height: 500px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 18px;
}

.item {
  margin-bottom: 18px;
}
</style>