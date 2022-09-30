<template>
  <div class="content">
    <div class="content-movies">
      <div class="grid-movies row">
        <b-card
          class="movies-create"
          img-src="https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg"
          img-alt="Image"
          img-top
          tag="article"
        >
          <div class="link">
            <b-button class=" btn-fill">
              <router-link :to="{ path: 'reports-comments' }" class="title-btn"
                >Comments</router-link
              ></b-button
            >
          </div>
        </b-card>
        <b-card
          class="movies-list"
          img-src="https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg"
          img-alt="Image"
          img-top
          tag="article"
        >
          <div class="link">
            <b-button class=" btn-fill">
              <router-link
                :to="{ path: 'reports-sessions' }"
                class="title-btn"
                >Sessions</router-link
              ></b-button
            >
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.content-movies {
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
