<template>
  <div>
    <Toast />
<<<<<<< Updated upstream
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
=======
    <div class="content-theaters">
      <DataTable :value="theaters">
        <Column
          v-for="col of columns"
          :field="col.field"
          :header="col.header"
          :key="col.field"
>>>>>>> Stashed changes
        ></Column>
        <Column field="Config" header="Config">
          <template #body="{data}">
            <Button
              @click.prevet="config(data._id)"
              type="button"
              icon="pi pi-cog"
            ></Button> </template
        ></Column>
        <Column field="Config" header="Config">
          <template #body="{theater}">
            <Button
              @click.prevet="config(theater._id)"
              type="button"
              icon="pi pi-delete-left 
"
            ></Button>
          </template>
        </Column>

        <div v-if="FormUpdated">
          <FormUpdated :theater="selectTheater[0]"></FormUpdated>
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
      </DataTable>

    
    </div>
  </div>
</template>
<script>
import TheatersApi from "../../server/theaters-api";
import FormUpdated from "./FormUpdated.vue";

const theatersApi = new TheatersApi();

export default {
  props: {
    theater: {
      type: Object
    }
  },
  components: {
    FormUpdated
  },
<<<<<<< Updated upstream

=======
  created() {
    this.columns = [
      // {field: '_id', header: 'ID'},
      { field: "theaterId", header: "theaterId" },
      { field: "location.address.street1", header: "Address" },
      { field: "location.address.city", header: "City" },
      { field: "location.address.state", header: "STATE" },
      { field: "location.address.zipcode", header: "Zipcode" },
      { field: "location.geo.type", header: "Type" },
      { field: "location.geo.coordinates.0", header: "Latitude" },
      { field: "location.geo.coordinates.1", header: "Longitude" }
    ];
  },
>>>>>>> Stashed changes

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
      selectTheater: {}
    };
  },
  computed: {
    rows() {
      this.theaters.length;
    }
  },
  methods: {
    onChange(event) {
      this.page = event;
      console.log(this.page)
      this.searchTheater();
    },
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },
    async searchTheater() {
      const result = await this.theatersApi.getTheaters({
        page: this.page,
        limit: this.limit
      });
      console.log('serach this page', this.page)
      this.theaters = result.content;
      this.pagination.perPage = this.limit;
      this.pagination.totalRows = result.pagesTotal;

      console.log(result)
    },
    config(theater) {
      this.FormUpdated = !this.FormUpdated;
      this.selectTheater = this.theaters.filter(value => value._id == theater);
      console.log("selectTheater", theater);
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
