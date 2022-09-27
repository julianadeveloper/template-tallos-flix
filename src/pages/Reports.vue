<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header"> </template>

            <div class="col-md-12">
              <h1 align="center">List Comments</h1>
              <CommentsList />
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommentsList from "../pages/CommentsList.vue";

//retornar meus dados aqui
export default {
  components: {
    CommentsList,

  }
};
</script>
<style></style>
