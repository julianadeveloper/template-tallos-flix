<template>
  <card class="container-movies">
    <Toast/>
    <div class="container-columns">
      <div class="col-2 md:col-4">
        <label>Title</label>

        <div class="p-inputgroup">
          <InputText v-model="movie.title" placeholder="Title" />
        </div>

        <label>Genres</label>
        <div class="p-inputgroup">
          <chips
            separator=","
            v-model="movie.genres"
            placeholder="Genres"
          ></chips>
        </div>
        <label>Runtime</label>

        <div class="p-inputgroup">
          <InputText v-model="movie.runtime" placeholder="Runtime" />
        </div>

        <label>Cast</label>
        <div class="p-inputgroup">
          <chips separator="," v-model="movie.cast" placeholder="Cast"></chips>
        </div>

        <label>Plot</label>
        <div class="p-inputgroup">
          <Textarea
            v-model="movie.plot"
            rows="2"
            cols="30"
            placeholder="Plot"
          ></Textarea>
        </div>

        <label>Poster Url</label>
        <div class="p-inputgroup">
          <InputText
            v-model="movie.poster"
            placeholder="https://link.com/img.png"
          />
        </div>

        <label>Directors</label>
        <div class="p-inputgroup">
          <chips v-model="movie.directors" placeholder="Names Directors" />
        </div>
        s
      </div>

      <!--Colunm 2-->
      <div class="col-2 md:col-4">
        <label>Released</label>

        <div class="p-inputgroup">
          <InputText v-model="movie.released" placeholder="Released" />
        </div>

        <label>Languages</label>

        <div class="p-inputgroup">
          <chips v-model="movie.languages" placeholder="Languages"></chips>
        </div>
        <div class="p-inputgroup"></div>
        <label>Rated</label>

        <div class="p-inputgroup">
          <InputText v-model="movie.rated" placeholder="Rated" />
        </div>

        <label>Wins</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.awards.wins"
            placeholder="Wins"
          ></InputNumber>
        </div>
        <label>Nominations</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.awards.nominations"
            placeholder="Nominations"
          ></InputNumber>
        </div>
        <label>Full Plot</label>

        <div class="p-inputgroup">
          <Textarea
            v-model="movie.fullplot"
            rows="5"
            cols="30"
            placeholder="Full Plot"
          ></Textarea>
        </div>
      </div>

      <div class="col-2 md:col-4">
        <label>Year</label>
        <div class="p-inputgroup">
          <InputNumber v-model="movie.year" placeholder="Year"></InputNumber>
        </div>

        <label>Countries</label>

        <div class="p-inputgroup">
          <chips v-model="movie.countries" placeholder="Countries"></chips>
        </div>
        <label>Type</label>
        <div class="p-inputgroup">
          <InputText
            v-model="movie.type"
            placeholder="Movie or Serie"
          ></InputText>
        </div>

        <label>Awards Wins</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.awards.wins"
            placeholder="Wins"
          ></InputNumber>
        </div>
        <label>Nominations</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.awards.nominations"
            placeholder="Nominations"
          ></InputNumber>
        </div>

        <label>Text</label>

        <div class="p-inputgroup">
          <Textarea
            v-model="movie.awards.text"
            placeholder="Text"
            rows="5"
            cols="30"
          ></Textarea>
        </div>
      </div>

      <div class="col-2 md:col-2">
        <label>Imdb Rating</label>
        <div class="p-inputgroup">
          <InputNumber
            :min="0"
            :max="10"
            v-model="movie.imdb.rating"
            placeholder="Wins"
          ></InputNumber>
        </div>

        <label>Imdb Votes</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.imdb.votes"
            placeholder="votes"
          ></InputNumber>
        </div>

        <label>Imdb ID</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.imdb.id"
            placeholder="id imdb"
          ></InputNumber>
        </div>

        <label>Tomatoes Rating</label>
        <div class="p-inputgroup">
          <InputNumber
            :min="0"
            :max="10"
            v-model="movie.tomatoes.viewer.rating"
            rows="3"
            cols="30"
            placeholder=""
          ></InputNumber>
        </div>
        <label>Tomatoes numReviews</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.tomatoes.viewer.numReviewes"
            placeholder=""
          ></InputNumber>
        </div>

        <label>Tomatoes Meter</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.tomatoes.viewer.meter"
            placeholder=""
          ></InputNumber>
        </div>
      </div>

      <div class="col-2 md:col-4">
        <label>Rotten</label>
        <div class="p-inputgroup">
          <InputText v-model="movie.rotten" placeholder="Rotten"></InputText>
        </div>

        <label>Fresh</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.tomatoes.fresh"
            placeholder=""
          ></InputNumber>
        </div>

        <label>Critic Rating</label>
        <div class="p-inputgroup">
          <InputNumber
            :min="0"
            :max="10"
            v-model="movie.tomatoes.critic.rating"
            placeholder=""
          ></InputNumber>
        </div>

        <label>Critic Number Reviews</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.tomatoes.critic.numReviewes"
            placeholder=""
          ></InputNumber>
        </div>
        <label>Critic Meter</label>
        <div class="p-inputgroup">
          <InputNumber
            v-model="movie.tomatoes.critic.meter"
            placeholder=""
          ></InputNumber>
        </div>
        -
      </div>
    </div>
    <div class="btn-create-movie">
      <Button
        @click.prevent="createMovie()"
        icon="pi pi-check"
        class="p-button-success"
        placeholder="Save"
        ><i class="fa-solid fa-floppy-disk"></i
      ></Button>
    </div>
  </card>
</template>
<script>
import MoviesApi from "../../server/movies-api";

const moviesApi = new MoviesApi();
export default {
  data() {
    return {
      moviesApi,
      movie: {
        plot: "",
        genres: [],
        runtime: null,
        cast: [],
        title: "",
        fullplot: "",
        languages: [],
        released: "",
        writers: [],
        awards: {
          wins: null,
          nominations: "",
          text: ""
        },
        lastupdated: "",
        year: null,
        imdb: {
          rating: null,
          votes: null,
          id: null
        },
        countries: [],
        type: "",
        tomatoes: {
          viewer: {
            rating: null,
            numReviewes: null
          },
          fresh: null,
          critic: {
            rating: null,
            numReviewes: null,
            meter: null
          },
          rotten: null,
          lastUpdated: ""
        }
      }
    };
  },
  
  async updatedMovie()
  {
    try{
      this.movie = await this.moviesApi.MovieUpdate(this.movie._id, this.movie)
      this.$toast.add({
            severity: "success",
            summary: "Movie Updated",
            life: 3000
          });
      return this.movie
    }catch(error){
      throw new error(error)
    }
      
   
  }
  
};
</script>
<style scoped>
.container-movies {
  overflow: hidden;
  max-width: 100%;
  height: 100%;
  background-color: rgb(43, 43, 43);
  display: flex;
  gap: 1rem;
}
.container-columns {
  display: flex;
}

h5 {
  padding: 1rem;
  color: white;
}
label {
  color: white;
}
.btn-create-movie {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
}

@media (max-width: 600px) {
  card{
    flex-direction: column;
    flex-wrap: wrap;
  }
  .col-2{
flex-wrap: wrap;
  }
}
</style>
