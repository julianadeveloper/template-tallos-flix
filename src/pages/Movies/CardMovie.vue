<template>
  <div class="col-12">
    <div class="form-movie" v-if="form" >
          <MoviesFormEditVue @closeForm="close"></MoviesFormEditVue>

        </div>

    <figure class="movie">
      <div class="movie__hero">
        <img :src="movie.poster" alt="Rambo" class="movie__img">


      </div>
      <div class="movie__content">

        <div class="movie__title">
          <h1 class="heading__primary">{{movie.title}} </h1>
          <div class="movie__tag movie__tag--1">{{movie.genres}}</div>
          <div class="movie__tag movie__tag--1">{{movie.writers}}</div>

        </div>
        <p class="movie__description">
          {{movie.plot}}
        </p>


        <div class="movie__content_row">
          <div class="movie__details">
            <p class="movie__detail">
              {{movie.fullplot}}
            </p>
            Awards:
            <p class="movie__detail">
              {{movie.awards.wins}}
              {{movie.awards.nominations}}
              {{movie.awards.text}}
            </p>
            <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i>
              </span>{{movie.runtime}}min</p>
            <p class="movie__detail"><span class="icons icons-yellow"><i class="fa-solid fa-calendar-days"></i>
              </span>{{movie.released}}
              {{movie.year}}</p>
            <p class="movie__detail"><span class="icons icons-grey"><i
                  class="fa-solid fa-pen-to-square"></i></span>{{movie.cast}}
            </p>
            <p class="movie__detail"><span class="icons icons-yellow"><i class="fa-solid fa-language"></i>
              </span>{{movie.languages}}</p>
          </div>


          <div class="critics">

            <p class="movie__details">
              <span class="icons icons-yellow">
                <i class="fas fa-fire"></i>
              </span>
              Rating:{{movie.tomatoes.viewer.rating}}
              N Reviewes:{{movie.tomatoes.viewer.numReviewes}}
              Rotten:{{movie.tomatoes.rotten}}
              last updated: {{movie.tomatoes.lastUpdated}}
            </p>

            <p class="movie__details">
              <span class="icons icons-yellow">
                <i class="fa-solid fa-play"></i>
              </span>
              rating:{{movie.imdb.rating}}
              votes:{{movie.imdb.votes}}
              id:{{movie.imdb.id}}
            </p>
          </div>
        </div>
        <div class="buttons-config">
          <div class="btn-config">
            <b-button @click="ativaForm" class="btn-fill" variant="success"><i class="pi pi-pencil
"></i></b-button>
          </div>
          <div class="btn-config">
            <b-button @click.prevent="deleteMovie" class="btn-fill" variant="danger"><i class="fa-solid fa-trash"></i></b-button>
          </div>
        </div>
      
      </div>
    </figure>
  </div>
</template>
<script>
import MoviesFormEditVue from './MoviesFormEdit.vue'
export default {
  name: "CardMovie",
  components: {
    MoviesFormEditVue
  },
  // props: {
  //   movie: {
  //     type: Object,
  //   }
  // },
  data() {
    return {
      form: false,
      movie: {
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
    }
  },
  methods: {
   deleteMovie() {
     console.log('delete', this.movie)
    //  this.apiMovies.deleteMovie(this.movie._id)
    
    },


    ativaForm(){

      this.form = !this.form;
    },
    close(){
      console.log(this.form)
      this.form = !this.form;
    }
  }

}
</script>


<style scoped>
.form-movie {
  display:flex;
  position: absolute;
  z-index: 5;
  align-items: center;
  justify-content: center;

}

.critics {
  display: flex;
  flex-direction: column;
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
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, .2);
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
  font-size: 16px;
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
  background-color: #A9C9FF;
}

.movie__tag--2 {
  background-color: #FFBBEC;
}

.movie__description {
  font-size: 14px;
}

.movie__details {
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
</style>