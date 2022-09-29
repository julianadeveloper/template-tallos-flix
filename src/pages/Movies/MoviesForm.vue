<template>
  <card class="container-movies">
    <div class="form-column-one">
      <div class="cold-md-6">
        <h4 slot="header" class="card-title">Register a New Movie</h4>
      </div>
      <div class="col-md-4">
        <div class="grid p-fluid">
          <div class="col-12 md:col-4">
            <label>Title</label>

            <div class="p-inputgroup">
              <InputText v-model="movie.title" placeholder="Title" />
            </div>
          </div>

          <div class="col-12 md:col-4">
            <label>Genres</label>
            <chips v-model="movie.genres" placeholder="Genres"></chips>
          </div>

          <div class="col-12 md:col-4">
            <label>Runtime</label>

            <div class="p-inputgroup">
              <InputText v-model="movie.runtime" placeholder="Runtime" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="grid p-fluid">
          <div class="col-12 md:col-4">
            <label>Cast</label>
            <chips v-model="movie.cast" placeholder="Cast"></chips>
          </div>
          <div class="col-md-12">
            <div class="grid p-fluid">
              <label>Plot</label>
              <Textarea
                v-model="movie.plot"
                rows="3"
                cols="30"
                placeholder="Plot"
              ></Textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---COLUMN 2-->

    <div>
      <div class="form-column-two">
        <div class="col-md-4">
          <div class="grid p-fluid">
            <div class="col-12 md:col-4">
              <label>Poster Link</label>

              <div class="p-inputgroup">
                <InputText v-model="movie.poster" placeholder="Poster" />
              </div>
            </div>

            <div class="col-12 md:col-4">
              <label>Directors</label>
              <chips v-model="movie.directors" placeholder="Directors"></chips>
            </div>

            <div class="col-12 md:col-4">
              <label>Released</label>

              <div class="p-inputgroup">
                <InputText v-model="movie.released" placeholder="Released" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="grid p-fluid">
            <div class="col-12 md:col-4">
              <label>Languages</label>
              <chips v-model="movie.languages" placeholder="Languages"></chips>
            </div>

            <div class="col-md-12">
              <div class="grid p-fluid">
                <label>Full Plot</label>
                <Textarea
                  v-model="movie.fullplot"
                  rows="5"
                  cols="30"
                  placeholder="Full Plot"
                ></Textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--parte 3-->
      <div class="form-column-tree">
        <div class="cold-md-6">
          <h4 slot="header" class="card-title">Parte 3</h4>
        </div>
        <div class="col-md-4">
          <div class="grid p-fluid">
            <div class="col-12 md:col-4">
              <label>Rated</label>

              <div class="p-inputgroup">
                <InputText v-model="movie.rated" placeholder="Rated" />
              </div>
            </div>

         

            <div class="col-12 md:col-4">
              <p>Awards</p>
              <div class="p-inputgroup">
                <label>Wins</label>
                <InputNumber
                  v-model="movie.awards.wins"
                  placeholder="Wins"
                ></InputNumber>

                <label>Nominations</label>

                <InputNumber
                  v-model="movie.awards.nominations"
                  placeholder="Nominations"
                ></InputNumber>
              </div>
            </div>

            <div class="col-12 md:col-4">
              <label>Text</label>

              <div class="p-inputgroup">
                <Textarea
                  v-model="movie.awards.text"
                  placeholder="Text"
                  rows="3"
                  cols="30"
                ></Textarea>
              </div>
            </div>

            <div class="col-12 md:col-4">
              <label>Last Update</label>

              <div class="p-inputgroup">
                <InputText v-model="movie.lastupdated" placeholder="Last Update" />
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-4">
          <div class="grid p-fluid">
            <div class="col-12 md:col-4">
              <label>Year</label>
              <InputNumber v-model="movie.year" placeholder="Year"></InputNumber>
            </div>

            <div class="col-12 md:col-4">
              <label>Countries</label>
              <chips v-model="movie.countries" placeholder="Countries"></chips>
            </div>




            <div class="col-12 md:col-4">
              <p>Imdb</p>
              <div class="p-inputgroup">
                <label>Rating</label>



                <InputNumber
                  v-model="movie.imdb.rating"
                  placeholder="Wins"
                ></InputNumber>

                <label>Votes</label>

                <InputNumber
                  v-model="movie.imdb.votes"
                  placeholder="Nominations"
                ></InputNumber>


                <label>ID</label>

                <InputNumber
                  v-model="movie.imdb.id"
                  placeholder="Nominations"
                ></InputNumber>
              </div>
            </div>
            <div class="col-md-12">
              <div class="grid p-fluid">
                <label>Type</label>
                <InputText
                  v-model="movie.type"
                  rows="3"
                  cols="30"
                  placeholder="Type"
                ></InputText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      movie: {
        plot: "",
        genres: [],
        runtime: 0,
        cast: [],
        title: "",
        fullplot: "",
        language: [],
        released: "",
        writers: [],
        awards: {
          wins: 0,
          nominations: "",
          text: ""
        },
        lastupdated: "",
        year: 0,
        imdb: {
          rating: 0,
          votes: 0,
          id: 0
        },
        countries: [],
        type: "",
        tomatoes: {
          viewer: {
            rating: 0,
            numReviewes: 0
          },
          fresh: 0,
          critic: {
            rating: 0,
            numReviewes: 0,
            meter: 0
          },
          rotten: 0,
          lastUpdated: ""
        }
      }
    };
  }
};
</script>
<style scoped>
.container-movies {
  display: flex;
  gap: 1rem;
}
.form-columns-one {
  display: flex;
  gap: 1rem;
}
.form-colum-two {
  display: flex;
  flex-direction: column;
}
</style>
