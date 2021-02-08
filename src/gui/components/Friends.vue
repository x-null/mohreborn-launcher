<template>
  <el-row>
    <el-col :span="24">
      <img
        src="http://racclan.weebly.com/uploads/5/3/0/8/53086121/9796051.jpg?734"
        class="image"
      />
      <FriendsList />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FriendsList from "@/gui/components/FriendsList.vue";

@Options({
  components: {
    FriendsList,
  },
})
export default class Friends extends Vue {}
</script>
    
<style>
.image {
  width: 100%;
  display: block;
  border-radius: 5px;
}
</style>