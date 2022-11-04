<template class="col-12">
  <TheaterVue />
</template>
<script>
import TheaterVue from "./Theaters/Theater.vue";
export default {
  components: {
    TheaterVue
  }
};
</script>
<style scoped>
.theater-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100vh;
  overflow: hidden;
}
</style>
