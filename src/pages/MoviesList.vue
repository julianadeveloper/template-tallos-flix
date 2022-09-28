<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <template class="page-movie">
              <h4 class="card-title">Movies List</h4>
              <p class="card-category">
                All Movies in TallosFlix
              </p>
              <card-movie></card-movie>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CardMovie from "../components/CardMovie.vue"
export default {
components:{
  CardMovie
}

};
</script>
<style scoped>
/* .my-card{
  width: 100px;
  height: 30;
} */
.page-movie{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 600px) {
  .page-movie {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 25%;
    height: 100%;
    max-width: 100%;
  }
}
</style>
