<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div>
            <card>
            Config or Create a New Movie Register
            <router-link :to="{path:'/admin/movies-list'}">Create</router-link>

          </card>
          </div>

          <div>
            <card>
            This Movies List
            <router-link :to="{path:'/admin/movies-list'}">List</router-link>
          </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MoviesListVue from './Movies/MoviesList.vue';
  export default{
    components:{
      MoviesListVue
    }
  }
</script>
<style></style>
