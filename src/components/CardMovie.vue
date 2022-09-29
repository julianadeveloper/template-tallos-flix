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

            <div>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-card"
              ></b-pagination>

              <p class="mt-3">Current Page: {{ currentPage }}</p>
              <div class="col-md-12">
                <div class="row">
                  <!-- <div class="font-icon-detail"></div> -->
                  <!-- <div v-for="(movies, i) in movies" :key="i"></div> -->
                  <div class="col-md-2">
                    <div class="row card-components">
                      <b-card
                        :title="movie.title"
                        :img-src="movie.poster"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem; min-height: 20rem;"
                        class="mb-2"
                      >
                        <b-card-text> </b-card-text>

                        <b-button @click="details" variant="primary"
                          >Details</b-button
                        >
                      </b-card>
                    </div>
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
      movie: {},
      perPage: 3,
      currentPage: 1,
      moviesApi
    };
  },
  computed: {
    rows() {
      return this.movies.length;
    }
  },
  methods: {
    async listAllMovies() {
      this.movie = await this.moviesApi.listAll();

      console.log("componente", this.movies);
      return this.movie;
    }
  }
};
</script>
<style scoped>
/* .my-card{
  width: 100px;
  height: 30;
} */
</style>
