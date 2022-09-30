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
              <router-link :to="{ path: '/admin/user-search' }" class="title-btn"
                >List</router-link
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
                :to="{ path: '/admin/user-create' }"
                class="title-btn"
                >Create</router-link
              ></b-button
            >
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
// import UserCard from './UserProfile/UserCard.vue'

export default {
  components: {
    EditProfileForm
    // UserCard
  }
};
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
