<template>
  <div class="content">
    <div class="container-fluid">
      <div class="col">
        <div class="col-md-12">
          <h1>Bem vindo ao TallosFlix - Admin</h1>
          <caroussel-movie-vue></caroussel-movie-vue>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarousselMovieVue from "../components/CarousselMovie.vue";

export default {
  components: {
    CarousselMovieVue
  }
};
</script>

<style scoped>
h1 {
  color: white;
}
.container-movies {
  background-color: rgb(43, 43, 43);
}
@media (max-width: 600px) {
  h1 {
    display: none;
  }

caroussel-movie-vue{
  height: 100%;
}
}
</style>
