<template>
  <div class="content-movies">
    <div class="grid-movies row">
      <card-vue style="width: 25rem; margin-bottom: 2em; text-align: center;">
        <template #header>
          <img
            style="width:20rem; height:210px; padding:20px"
            alt="user header"
            src="../assets/images/movie.svg"
          />
        </template>
        <template #title>
          ListAll
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save">
            <router-link :to="{ path: '/admin/movies-list' }" class="title-btn"
              >List</router-link
            ></Button
          >
        </template>
      </card-vue>

      <card-vue style="width: 25rem; margin-bottom: 2em; text-align: center;">
        <template #header>
          <img
            style="width:20rem; height:210px; padding:20px; "
            alt="user header"
            src="../assets/images/update.svg"
          />
        </template>
        <template #title>
          Create
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save">
            <router-link
              :to="{ path: '/admin/movies-create' }"
              class="title-btn"
              >Create</router-link
            ></Button
          >
        </template>
      </card-vue>
    </div>
  </div>
</template>
<script>
import MoviesListVue from "./Movies/MoviesList.vue";
export default {
  components: {
    MoviesListVue
  }
};
</script>
<style scoped>
.content-movies {
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
}
.movies-list,
.movies-create {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
}
.grid-movies {
  gap: 4rem;
}
.title-btn {
  color: rgb(255, 255, 255);
}
</style>
