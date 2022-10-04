<template>
  <div class="col-12">
    <div class="form-movie">
      <MoviesFormEditVue class="form-movies"
        :movie="movie"
        v-if="form"
        @closeForm="close"
      ></MoviesFormEditVue>
    </div>

    <figure class="movie">
      <div class="movie__hero">
        <img :src="movie.poster" alt="Poster" class="movie__img" />
      </div>
      <div class="movie__content">
        <div class="movie__title">
          <h1 class="heading__primary">{{ movie.title }}</h1>

          <div
            title="cast"
            class="movie__tag movie__tag--2 writers"
            v-for="cast in movie.cast"
            :key="cast"
          >
            {{ cast }}
          </div>
        </div>

        <p class="movie__description">
          {{ movie.plot }}
        </p>
        <div class="genres">
          <div
            title="Genres"
            class="movie__tag movie__tag--1 movie-genres"
            v-for="genre in movie.genres"
            :key="genre"
          >
            {{ genre }}
          </div>
        </div>
        <div class="movie__content_row">
          <div class="movie__details">
            <p class="movie__detail">
              {{ movie.fullplot }}
            </p>
            <div class="awards" title="Awards">
              <p class="movie__detail">
                <span><i class="fa-solid fa-medal"></i></span>
                {{ movie.awards.wins }}
              </p>
              <p class="movie__detail" title="nominations">
                <span><i class="fa-solid fa-award"></i></span>
                {{ movie.awards.nominations }}
              </p>
              <p class="movie__detail" title="Awards Text">
                <span><i class="fa-solid fa-comment"></i></span>
                {{ movie.awards.text }}
              </p>
            </div>
            <p class="movie__detail" title="runtime">
              <span class="icons icons-grey"><i class="fas fa-clock"></i> </span
              >{{ movie.runtime }}min
            </p>
            <p class="movie__detail" title="Relesead">
              <span class="icons icons-yellow"
                ><i class="fa-solid fa-calendar-days"></i> </span
              >{{ movie.released }}
            </p>
            <p class="movie__detail" title="Year">
              <span class="icons icons-yellow"
                ><i class="fa-solid fa-calendar-days"></i> </span
              >{{ movie.year }}
            </p>
            <div v-for="write in movie.writers" :key="write">
              <p class="movie__detail" title="Writers">
                <span class="icons icons-grey"
                  ><i class="fa-solid fa-pen-to-square"></i></span
                >{{ write }}
              </p>
            </div>

            <div
              title="Languages"
              class="movie__tag movie__tag--3 movie-languages"
              v-for="language in movie.languages"
              :key="language"
            >
              {{ language }}
            </div>

            <div class="avaliation-contents">
              <div class="tomatoes">
                <p class="movie__detail">Tomatoes</p>
                <p class="movie__detail">
                  <span class="icons"> <i class="fa-solid fa-fire"></i> </span>
                  Rating:{{ movie.tomatoes.viewer.rating }}
                </p>
                <p class="movie__detail">
                  <span class="icons"> <i class="fa-solid fa-fire"></i> </span>

                  Reviewes:{{ movie.tomatoes.viewer.numReviews }}
                </p>

                <p class="movie__detail">
                  <span class="icons"> <i class="fa-solid fa-fire"></i> </span>
                  Rotten:{{ movie.tomatoes.rotten }}
                </p>

                <p class="movie__detail">
                  <span class="icons"> <i class="fa-solid fa-fire"></i> </span>
                  Updated: {{ movie.tomatoes.lastUpdated }}
                </p>
              </div>

              <div class="critics">
                <p class="movie__detail">Critics</p>
                <p class="movie__detail" title="Critics Rating">
                  <i class="fa-solid fa-star"></i>
                  rating:{{ movie.tomatoes.critic.rating }}
                </p>
                <p class="movie__detail" title="Critic Reviews">
                  <i class="fa-regular fa-comment"></i>
                  reviewes:{{ movie.tomatoes.critic.numReviews }}
                </p>
                <p class="movie__detail" title="Critic Meter">
                  <i class="fa-solid fa-face-smile"></i>
                  meter:{{ movie.tomatoes.critic.meter }}
                </p>
              </div>

              <div class="imdb">
                <p class="movie__details">
                  <span class="icons icons-yellow">
                    <img
                      class="imdb-logo"
                      src="../../assets/images/IMDB_Logo_2016.svg"
                    />
                  </span>
                  <!--IMDB-->
                  rating:{{ movie.imdb.rating }} votes:{{
                    movie.imdb.votes
                  }}
                  id:{{ movie.imdb.id }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons-config">
          <div class="btn-config">
            <b-button @click="ativaForm" class="btn-fill" variant="primary"
              ><i
                class="pi pi-pencil
"
              ></i
            ></b-button>
          </div>
          <div class="btn-config">
            <b-button
              @click.prevent="deleteMovie"
              class="btn-fill"
              variant="danger"
              ><i class="fa-solid fa-trash"></i
            ></b-button>
          </div>
        </div>
      </div>
    </figure>
  </div>
</template>
<script>
import MoviesFormEditVue from "./MoviesFormEdit.vue";
import MoviesApi from "../../server/movies-api";
const apiMovies = new MoviesApi();
export default {
  name: "CardMovie",
  components: {
    MoviesFormEditVue
  },
  props: {
    movie: {
      type: Object
    }
  },
  data() {
    return {
      form: false,
      apiMovies
    };
  },
  methods: {
    deleteMovie() {
      console.log("delete", this.movie);
      return this.apiMovies.deleteMovie(this.movie._id);
    },

    ativaForm() {
      console.log(this.form, "form");
      this.form = !this.form;
    },
    close() {
      console.log(this.form);
      this.form = !this.form;
    }
  }
};
</script>

<style scoped>
.avaliation-contents {
  display: flex;
  max-width: 25%;
}
.awards {
  display: flex;
}
.genres {
  display: flex;
}
.movie-genres {
  max-width: 100px;
  margin: 0.25rem;
}
.movie-languages {
  display: flex;
  margin: 0.25rem;
  width: 100px;
}
.fa-medal {
  color: goldenrod;
}

.fa-award {
  color: goldenrod;
}
.imdb-logo {
  width: 1.5rem;
  height: 1.5rem;
}

.form-movie {
  display: flex;
  position: absolute;
  z-index: 5;
  align-items: center;
  justify-content: center;
}

.buttons-config {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.movie {
  max-width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.movie__hero {
  flex: 0 0 30%;
  width: 30%;
  background-color: white;
}

.movie__img {
  width: 100%;
  height: 100%;
  display: block;
}

.movie__content {
  background-color: #fff;
  flex: 1;
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
}

.movie__content_row {
  display: flex;
}

.movies__content_critics {
  display: flex;
}

.movie__title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.heading__primary {
  font-size: 25px;
  margin-right: auto;
  color: royalblue;
}

.movie__details_row {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.fa-language {
  color: rgb(95, 95, 95);
}

.fa-fire {
  color: salmon;
}

.fa-play {
  color: yellow;
}

.fa-pen-to-square {
  color: rgb(95, 95, 95);
}

.movie__tag {
  font-size: 10px;
  color: #fff;
  padding: 2px 7px;
  border-radius: 100px;
  margin-right: 8px;
  display: block;
  text-transform: uppercase;
}

.movie__tag--1 {
  background-color: #5f8fe1;
}

.movie__tag--2 {
  background-color: #6783b4;
}
.movie__tag--3 {
  background-color: rgb(237, 95, 95);
}
.movie__description {
  font-size: 14px;
}

.movie__details {
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.movie__detail {
  font-size: 13px;
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.icons i {
  margin-right: 3px;
  font-size: 18px;
}

.icons-red {
  color: salmon;
}

.icons-grey {
  color: grey;
}

.icons-yellow {
  color: rgb(190, 190, 71);
}
.form-movies{
    width: 100%;
    height: 100%;
    display: flex;
  }
@media (max-width: 600px) {
  .form-movies{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .movie {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .movie__title {
    display: flex;
    flex-direction: column;
  }
  .movie__hero {
    width: 100%;
    background-color: white;
  }
  .movie__content {
    display: flex;
  }
}
</style>
