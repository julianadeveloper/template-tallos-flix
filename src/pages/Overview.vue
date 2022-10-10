<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row stats">
        <div class=" col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-button-play text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Movies</p>
              <h4 class="card-title">
                {{ $store.getters["dashboard/getMovies"] }}
              </h4>
            </div>
          </stats-card>

          <stats-card>
            <div slot="header" class="icon-warning">
              <i
                class="nc-icon nc-istanbul

text-warning"
              ></i>
            </div>
            <div slot="content">
              <p class="card-category">Theaters</p>
              <h4 class="card-title">
                {{ $store.getters["dashboard/getTheaters"] }}
              </h4>
            </div>
          </stats-card>
          <stats-card>
            <div slot="header" class="icon-warning">
              <i
                class="nc-icon nc-chat-round

text-warning"
              ></i>
            </div>
            <div slot="content">
              <p class="card-category">Comments</p>
              <h4 class="card-title">
                {{ $store.getters["dashboard/getComments"] }}
              </h4>
            </div>
          </stats-card>
        </div>

        <caroussel-movie-vue></caroussel-movie-vue>
      </div>
    </div>
  </div>
</template>
<script>
import CarousselMovieVue from "../components/CarousselMovie.vue";
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import MoviesApi from "./../server/movies-api";
import theatersApi from "./../server/theaters-api";
import Comments from "./../server/comments-api";
import { mapGetters, mapMutations } from "vuex";

const moviesApi = new MoviesApi();
const TheatersApi = new theatersApi();
const commentsApi = new Comments();

export default {
  components: {
    CarousselMovieVue,
    ChartCard,
    StatsCard
  },
  data() {
    return {
      moviesApi,
      TheatersApi,
      commentsApi
    };
  },
  computed: {
    ...mapGetters(["dashboard/getMovies"]),
    ...mapGetters(["dashboard/getTheaters"]),
    ...mapGetters(["dashboard/getComments"])
  },
  methods: {
    async movies() {
      const result = await this.moviesApi.listMovies();
      this.setMovies(result.numberOfElements);
    },
    ...mapMutations({
      setMovies: "dashboard/setMovies"
    }),

    async theaters() {
      const result = await this.TheatersApi.getTheaters();
      this.setTheaters(result.numberOfElements);
    },
    ...mapMutations({
      setTheaters: "dashboard/setTheaters"
    }),
    async comments() {
      const result = await this.commentsApi.listCommentsEmail();
      this.setComments(result.numberOfElements);
    },
    ...mapMutations({
      setComments: "dashboard/setComments"
    })
  },

  created() {
    this.movies();
    this.theaters();
    this.comments();
  }
};
</script>

<style scoped>
.stats {
  margin: 1rem;
}
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

  caroussel-movie-vue {
    height: 100%;
  }
}
</style>
