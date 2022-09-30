<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <template>
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
            <template class="page-movie">
              <h4 class="card-title">Movies List</h4>

              <p class="card-category">
                All Movies in TallosFlix
              </p>

              <card-vue v-for="(movies, i) in movies" :key="i">
                >
                <template #header>
                  <div class="card-image">
                    <img alt="user header" />
                  </div>
                </template>
                <template #title> {{movies.title}}</template>
                <template #content>{{movies.fullplot}} </template>
                <template #footer>
                  <Button icon="pi pi-check" label="Save" />
                  <Button
                    icon="pi pi-times"
                    label="Cancel"
                    class="p-button-secondary"
                    style="margin-left: .5em"
                  />
                </template>
              </card-vue>
            </template>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardMovies from "./CardMovie.vue";
import MoviesApi from "../../server/movies-api";
const moviesApi = new MoviesApi();
export default {
  components: {
    CardMovies
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
    async searchMovies() {
      const result = await this.moviesApi.listMovies({
        page: this.page,
        limit: this.limit,
        search: this.search,
        type: this.selectedType
      });
      this.movies = result.content;
      this.pagination.perPage = this.limit;
      this.pagination.totalRows = result.pagesTotal;
      console.log(this.movies);
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
      console.log("options", this.options);
    }
  }
};
</script>
<style scoped>
/* .my-card{
  width: 100px;
  height: 30;
} */
.page-movie {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
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
