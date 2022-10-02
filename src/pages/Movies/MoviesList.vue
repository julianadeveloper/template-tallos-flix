<template>
      <card class="col-12"> 
        <template>
          <div>
            <div class="text-center">
              <base-input type="text" label="Search User" placeholder="Insert user email" @input="onInput"></base-input>
              <template>
                <div>
                  <b-form-select v-model="selectedType" :options="types"></b-form-select>
                  <div class="mt-3">
                    Selected: <strong>{{ selectedType }}</strong>
                  </div>
                </div>
              </template>
              <button class="btn btn-success btn-fill float-right" @click.prevent="searchMovies()">
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
        <!--v-for="(movie, i)in movies" :key="i"-->
        <div class="card-movie">

          <CardMovie @updateMovie="updateMovies" @deleteMovie="deletMovie"/>
        </div>

        <div class="overflow-auto">
          <b-pagination v-model="page" :per-page="pagination.perPage" :total-rows="pagination.totalRows"
            @change="onChange" aria-controls="my-table" align="center"></b-pagination>

          <p class="mt-3">Current Page: {{ page }}</p>
        </div>
      </card>
  </template>
<script>
import MoviesApi from "../../server/movies-api";
import CardMovie from "../Movies/CardMovie.vue"
const moviesApi = new MoviesApi();

const movie = {
        plot: "Três pobres em busca de eleger o Lula",
        genres: ['Drama', "Suspense"],
        runtime: 120,
        cast: [
          'Juliana Oliveira',
          'Mariana Oliveira',
          'Ariane Oliveira'
        ],
        title: "Eleiçĩes 2022",
        fullplot: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall",
        languages: ['Portuguese', 'English'],
        released: "01 de outubro",
        writers: ['Jose Padilha', 'Wagner Moura'],
        awards: {
          wins: 1,
          nominations: "XXXX",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
        },
        lastupdated: "25 de abril",
        year: 2022,
        imdb: {
          rating: 10,
          votes: 120,
          id: 1,
        },
        countries: ['Brazil', 'United States'],
        type: "Movie",
        tomatoes: {
          viewer: {
            rating: 10,
            numReviewes: 20
          },
          fresh: 1,
          critic: {
            rating: 9,
            numReviewes: 50,
            meter: 10
          },
          rotten: 10,
          lastUpdated: "22/12/2020"
        }
      }
export default {
  components: {
    CardMovie
  },
  data() {
    return {
      movie,
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
    searchMovies() {
      //inserir o async await aqui pois eu removi
      const result = this.moviesApi.listMovies({
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
    },

    updateMovies() {
      console.log(this.movie)
    },
    deletMovie(){
      console.log(this.movie)
    }
  }
};
</script>
<style scoped>

.page-movie{
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
