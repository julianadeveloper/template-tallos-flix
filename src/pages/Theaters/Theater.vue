<template>
  <div>
    <Toast />
    <div class="content-theaters" >
   
    
      <DataTable :value="theaters" >
        <Column field="theaterId" header="theaterId"></Column>
        <Column field="location.address.street1" header="Street"></Column>
        <Column field="location.address.city" header="City"></Column>
        <Column field="location.address.state" header="State"></Column>
        <Column field="location.address.zipcode" header="zipcode"></Column>
        <Column field="location.geo.coordinates.0" header="Longitude"></Column>
        <Column
          field="location.geo.coordinates.1"
          header="Coordinates"
        ></Column>
        <Column field="Config" header="Config">
          <template #body="{data}">
            <Button
              @click.prevet="config(data.theaterId)"
              type="button"
              icon="pi pi-cog"
            ></Button> </template
        ></Column>
        <Column field="Config" header="Config">
          <template #body="{theater}">
            <Button
              @click.prevet="config(theater.theaterId)"
              type="button"
              icon="pi pi-delete-left 
"
            ></Button> </template
        ></Column>
      </DataTable>

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
    <div v-if="FormUpdated">
      <FormUpdated :theater="theaters"> </FormUpdated>

    </div>
  </div>

</template>
<script>
import TheatersApi from "../../server/theaters-api";
import FormUpdated from "./FormUpdated.vue"

const theatersApi = new TheatersApi();

export default {
  props: {
    theaters: {
      type: Array
    }
  },
  components: {
    FormUpdated
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
      showAddButton: true,
      FormUpdated: false,
    };
  },
  computed: {
    rows() {
      this.theaters.length;
    }
  },
  methods: {
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },
       onChange(event) {
      this.page = event;
      this.searchTheater();
    },
    async searchTheater() {
      const result = await this.theatersApi.getTheaters({
        search: this.search,
        page: this.page,
        limit: this.limit
      });
      this.theaters = result.content;
      this.pagination.perPage = this.limit;
      this.pagination.totalRows = result.pagesTotal;
    },
    config(theater) {
      console.log(theater)
      this.FormUpdated = !this.FormUpdated;

    }
  },
  mounted() {
    this.searchTheater();
  }
};
</script>
<style scoped>
.my-form-theaters {
  width: 100%;
  height: 100%;
  background-color: rgb(199, 186, 211);
}
</style>
