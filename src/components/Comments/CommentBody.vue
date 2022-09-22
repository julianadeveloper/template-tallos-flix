<template>
  <!-- <div class="card" v-for="(comments, i) in comments" :key="comments" -->
  <div class="container-comment">
    <div class="col-12">
      <p>daskdposakdposkpdok</p>
    </div>
  </div>
</template>

<script>
import LTable from "src/components/Table.vue";

export default {
  name: "cardComment",
  components: {
    LTable
  },
  data() {
    return {
      comments: [
        {
          id: "",
          name: "",
          email: "",
          movie_id: "",
          data: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
.container-coment {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
