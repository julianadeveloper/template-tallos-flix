<template>
  <card class="col-12">
    <template>
      <Toast />

      <div class="container-search">
        <div class="input-search">
          <base-input
            type="text"
            label="Search Movie"
            placeholder="Movie"
            @input="onInput"
          ></base-input>
        </div>

        <div class="options">
          <label>Select Type</label>
          <b-select v-model="selectedType" :options="types"></b-select>
        </div>

        <button
          class="btn btn-success float-right"
          @click.prevent="searchMovies()"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div>
        Selected: <strong>{{ selectedType }}</strong>
      </div>
    </template>
    <template>
      <h4 class="card-title">Movies List</h4>

      <p class="card-category">
        All Movies in TallosFlix
      </p>
    </template>
    <div v-for="movie in movies" :key="movie._id" class="card-movie">
      <CardMovie
        :movie="movie"
        @updateMovie="updateMovies"
        @deleteMovie="deletMovie"
      />
    </div>
    <div class="overflow-auto">
      <b-pagination
        v-model="page"
        :per-page="pagination.perPage"
        :total-rows="pagination.totalRows"
        @change="onChange"
        aria-controls="my-table"
        align="center"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ page }}</p>
    </div>
  </card>
</template>
<script>
import MoviesApi from "../../server/movies-api";
import CardMovie from "../Movies/CardMovie.vue";
import { mapActions, mapMutations, mapState } from "vuex";

const moviesApi = new MoviesApi();

export default {
  components: {
    CardMovie
  },
  data() {
    return {
      movies: [],
      search: "",
      moviesApi,
      page: 1,
      limit: 10,
      pagination: {
        totalRows: 1,
        perPage: 10
      },
      types: [
        {
          value: "genres",
          text: "Gêneros"
        },
        // { value: "year", text: "Ano" },
        { value: "title", text: "Título" },
        { value: "directors", text: "Diretores" },
        { value: [], text: "All" }
      ],
      selectedType: "title"
    };
  },

  methods: {
    ...mapMutations({
      setMovies: "dashboard/setMovies"
    }),
    async onInput(searchValue) {
      // ler o valor do meu input
      this.search = await searchValue;
    },
    async onChange(event) {
      this.page = event;
      await this.searchMovies();
    },
    async searchMovies() {

      try {
        const result = await this.moviesApi.listMovies({
          page: this.page,
          limit: this.limit,
          search: this.search,
          type: this.selectedType
        });
        this.setMovies(result.numberOfElements);
        this.movies = result.content;
        this.pagination.perPage = this.limit;
        this.pagination.totalRows = result.pagesTotal;

        
    
      } catch (error) {
        throw new Error(error);
      }
    },

    async searchByFilter() {
      const params = {};
      if (this.search.type === "genres") {
        params.genres = this.search.input;
      }
      this.movies = await this.moviesApi.listMovies(params);
    }
  },
  mounted(){
    this.searchMovies()
  }
};
</script>
<style scoped>
.options {
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
}
.container-search {
  display: flex;
  width: 100%;
  margin: 1rem;
}
.btn-success {
  margin: 1rem;
  width: 60px;
}

@media (max-width: 600px) {
  .page-movie {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 25%;
    height: 100%;
    max-width: 100%;
  }

  .title {
    color: white;
  }
}
</style>
