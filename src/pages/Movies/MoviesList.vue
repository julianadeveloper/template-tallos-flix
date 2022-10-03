<template>
  <card class="col-12"  >
    <template >
      <Toast />

      <div>
        <div class="text-center">
          <base-input
            type="text"
            label="Search User"
            placeholder="Insert user email"
            @input="onInput"
          ></base-input>
          <template>
            <div>
              <b-form-select
                v-model="selectedType"
                :options="types"
              ></b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ selectedType }}</strong>
              </div>
            </div>
          </template>
          <button
            class="btn btn-success btn-fill float-right"
            @click.prevent="searchMovies()"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </template>
    <template>
      <h4 class="card-title">Movies List</h4>

      <p class="card-category">
        All Movies in TallosFlix
      </p>
    </template>
    <div v-for="movie in movies" :key="movie._id" class="card-movie" >
      <CardMovie :movie="movie" @updateMovie="updateMovies" @deleteMovie="deletMovie" />
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
        { value: "year", text: "Ano" },
        { value: "title", text: "Título" },
        { value: "directors", text: "Diretores" },
        { value: [], text: "All" }
      ],
      selectedType: "title"
    };
  },
  methods: {
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },
   async  searchMovies() {

    try{
      const result = await this.moviesApi.listMovies({
        page: this.page,
        limit: this.limit,
        search: this.search,
        type: this.selectedType
      });
      
      this.movies = result.content;
      this.pagination.perPage = this.limit;
      this.pagination.totalRows = result.pagesTotal;

    }catch(error){
      throw new Error(error)
    }


    },
    onChange(event) {
      this.page = event;
      this.searchMovies();
    },
    searchByFilter() {
      const params = {};
      if (this.search.type === "genres") {
        params.genres = this.search.input;
      }
      this.movies = this.moviesApi.listMovies(params);
    },

  },

};
</script>
<style scoped>
.page-movie {
  overflow: hidden;
  max-width: 100%;
  height: 100%;
  background-color: rgb(43, 43, 43);
  display: flex;
  gap: 1rem;
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
