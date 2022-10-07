<template>
  <div>
    <Toast />
    <div class="content-theaters">
      <base-input
        type="text"
        label="Email User"
        placeholder="insert email"
        @input="onInput"
      ></base-input>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="searchTheater"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {{nearbyTheaters}}
      <div class="overflow-auto">
        <b-pagination
          v-model="page"
          :per-page="pagination.perPage"
          :total-rows="pagination.totalRows"
          @change="onChange"
          aria-controls="my-table"
          align="center"
        ></b-pagination>
        <p class="mt-3">Current Page: {{ page }}</p>
      </div>
      <DataTable :value="theaters">
        <Column
          v-for="col of columns"
          :field="col.field"
          :header="col.header"
          :key="col.field"
        ></Column>
        <Column field="Config" header="update">
          <template #body="{data}">
            <Button
              @click.prevet="openForm(data._id)"
              type="button"
              icon="pi pi-cog"
            ></Button> </template
        ></Column>
        <Column field="Config" header="delete">
          <template #body="{data}">
            <Button
              @click.prevet="deleteTheater(data._id)"
              type="button"
              icon="pi pi-delete-left 
"
            ></Button>
          </template>
        </Column>
        <Column field="Config" header="Distance">
          <template #body="{data}">
            <Button
              @click.prevet="findDistance(data)"
              type="button"
              icon="pi pi-map-marker"
            ></Button>
          </template>
        </Column>

        <div v-if="FormUpdated" class="my-form-theaters">
          <FormUpdated :theater="selectTheater[0]"></FormUpdated>
        </div>
      </DataTable>
    </div>
    <div>
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
    },
    nearbyTheaters: {
      type: Array
    }
  },
  components: {
    FormUpdated,
  },
  created() {
    this.columns = [
      // { field: "_id", header: "ID" },
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

  data() {
   return {
      nearbyTheaters: [],
      distance: 1000,
      theatersApi,
      theaters: [],
      search: "",
      type: "",
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
      this.searchTheater();
    },
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },

    async findDistance(theater) {
  
    this.nearbyTheaters = await this.theatersApi.theaterDistance(theater);
      // console.log(theater.location.geo.coordinates)
            console.log(theater)
    
    },

    async searchTheater() {
      const result = await this.theatersApi.getTheaters({
        search: this.search,
        page: this.page,
        limit: this.limit
        // type: this.type,
      });


      this.theaters = result.content;
      this.pagination.perPage = this.limit;
      this.pagination.totalRows = result.pagesTotal;
    },
    async openForm(theater) {
      this.selectTheater = await this.theaters.filter(
        value => value._id == theater
      );
      this.FormUpdated = !this.FormUpdated;
    },
    async deleteTheater(theather) {
      alert('deleted ')
      // await this.theatersApi.deleteTheater(theather);
    }
  },
  mounted() {
    this.searchTheater();
  }
};
</script>
<style scoped>
.content-theaters {
  position: relative;
}
.my-form-theaters {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
