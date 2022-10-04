<template >
  <div>
    <Toast />
    <h1>Theaters</h1>
    <div class="content-theaters"> 
      <!-- <div v-for="theater in theaters" :key="theater._id" class="card-movie">
        {{ theater }}
       
        </div> -->

        <div sticky-header >
              <b-table
              class="table-sessions"
                id="my-table"
                :items="theaters"
                :index="index"
                :fields="fields"
                responsive="sm"
              >
              </b-table>
            </div>
        <div class="overflow-auto">
          <b-pagination
            v-model="page"
            :per-page="pagination.perPage"
            :total-rows="pagination.totalRows"
            @change="onChange()"
            aria-controls="my-table"
            align="center"
          ></b-pagination>
        <p class="mt-3">Current Page: {{ page }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import TheatersApi from "../../server/theaters-api";
import Modal from "../../components/Modal/Modal.vue";
const theatersApi = new TheatersApi();

export default {
  components: {
    Modal
  },

  data() {
    return {
      theatersApi,
      theaters: [],
      search: "",
      page: 1,
      limit: 10,
      pagination: {
        totalRows: 1,
        perPage: 10
      },
      fields: ["theaterId", "address"],

    };
  },
computed:{
  rows(){
    this.theaters.length
  }
},
  methods: {
    onChange(event) {
      this.searchTheater();
    },
    async searchTheater() {
      const result = await this.theatersApi.getTheaters({
        page: this.page,
        limit: this.limit
      });
      this.theaters = result.content;
      this.pagination.perPage = this.limit;
      this.pagination.totalRows = result.pagesTotal;
    },

  },
  mounted() {
    this.searchTheater();
  }
};
</script>
<style scoped>
.my-form-theaters{
  width: 100%;
  height: 100%;
  background-color: rgb(199, 186, 211);
}
</style>
