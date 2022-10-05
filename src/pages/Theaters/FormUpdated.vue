<template>
  <card class="container-movies">
    <Toast />
    <div class="container-columns">
      <div class="col-2 md:col-4">
        <label>theaterId</label>

        <div class="p-inputgroup">
          <InputText placeholder="Title" />
        </div>

        <label>Genres</label>
        <div class="p-inputgroup">
          <chips separator="," placeholder="Genres"></chips>
        </div>
      </div>
    </div>

    <div class="btn-create-movie">
      <Button
        title="back"
        @click.prevent="$router.push({ name: 'Movies' })"
        icon="pi pi-check"
        class="p-button-success"
        placeholder="Save"
        ><i class="fa-solid fa-backward"></i
      ></Button>
      <Button
        @click.prevent="testeProps()"
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
  props: {
    theater: {
      type: Object
    }
  },
  data() {
    return {
      moviesApi,
      theater: {}
    };
  },
  methods: {
    testeProps(props) {
      console.log(props);
    }
    // createMovie() {
    //   this.movie = this.moviesApi.MovieCreate(this.movie);
    //   this.$toast.add({
    //         severity: "success",
    //         summary: "Movie Created",
    //         life: 3000
    //       });
    //   return this.movie;
    // }
  }
};
</script>
<style scoped>
.btn-back-movie {
  display: flex;
}

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
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.btn-back-movie {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
}
@media (max-width: 600px) {
  card {
    flex-direction: column;
    flex-wrap: wrap;
  }
  .col-2 {
    flex-wrap: wrap;
  }
}
</style>
