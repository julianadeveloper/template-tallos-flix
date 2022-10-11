<template>
  <div class="content">
    <div class="content-movies">
      <div class="grid-movies row">
        <card-vue style="width: 25rem; margin-bottom: 2em; text-align: center;">
          <template #header>
            <img  style="width:20rem; height:210px; padding:20px" alt="user header" src="../assets/images/comments.svg" />
          </template>
          <template #title>
            Comments
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save">
              <router-link :to="{ path: 'reports-comments' }" class="title-btn"
                >Comments</router-link
              ></Button
            >
          </template>
        </card-vue>

        <card-vue style="width: 25rem; margin-bottom: 2em; text-align: center;">
          <template #header>
            <img style="width:20rem; height:210px; padding:20px; " alt="user header" src="../assets/images/sessions.svg">
          </template>
          <template #title>
            Sessions
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save">
              <router-link :to="{ path: 'reports-sessions' }" class="title-btn"
                >Sessions</router-link
              ></Button
            >
          </template>
        </card-vue>
      </div>
    </div>
  </div>
</template>
<script></script>
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
