<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Movies List</h4>
              <p class="card-category">
                All Movies in TallosFlix
              </p>
            </template>
            <div class="all-icons">
              <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                  <!-- <div class="font-icon-detail"></div> -->
                  <!-- <div v-for="(movies, i) in movies" :key="i"></div> -->
                  <div v-for="(movies, i) in movies" :key="i">
                    <b-card
                      :title="movies.title"
                      :img-src="movies.poster"
                      img-alt="Image"
                      card-img-left
                      tag="article"
                      style="width: 10rem;, max-width: 10rem;"
                      class="mb-2"
                    >
                      <b-card-text> </b-card-text>

                      <b-button @click="details" variant="success">Details</b-button>
                    </b-card>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoviesApi from "../server/movies-api";
const moviesApi = new MoviesApi();
export default {
  data() {
    return {
      movies: [],
      moviesApi
    };
  },
  methods: {
    async listAllMovies() {
      this.movies = await this.moviesApi.listAll();

      console.log("componente", this.movies);
      return this.movies;
    }
  },
  mounted() {
    this.listAllMovies();
  }
};
</script>
<style></style>
