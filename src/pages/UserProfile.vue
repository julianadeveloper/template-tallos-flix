<template>
  <div class="content">
    <div class="content-movies">
      <div class="grid-movies row">




        <card-vue style="width: 25rem; margin-bottom: 2em; text-align: center;">
          <template #header>
            <img  style="width:20rem; height:210px; padding:20px" alt="user header" src="../assets/images/users.svg" />
          </template>
          <template #title>
            ListAll
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save">
              <router-link :to="{ path: '/admin/user-search' }" class="title-btn"
                >List</router-link></Button>
          </template>
        </card-vue>

        <card-vue style="width: 25rem; margin-bottom: 2em; text-align: center;">
          <template #header>
            <img style="width:20rem; height:210px; padding:20px; " alt="user header" src="../assets/images/register-user.svg">
          </template>
          <template #title>
            Create
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save">
              <router-link
                :to="{ path: '/admin/user-create' }"
                class="title-btn"
                >Create</router-link
              ></Button
            >
          </template>
        </card-vue>


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
