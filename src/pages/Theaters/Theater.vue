<template>
  <div class="content-theaters">
    <Toast />
    <div  v-if="FormUpdated" class="my-form-theaters">
<FormUpdated  :theater="selectTheater[0]" @closeUpdate="teste"></FormUpdated>
    </div>

   <div v-if="formCreate">

    
    <FormCreate @closeCreated="closeCreate" ></FormCreate>
   </div>
    <div>


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




<b-button class="register-btn btn-fill" @click="openCreate">Register a new</b-button>



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

      <h3>Nearby Theaters</h3>
      <div class="nearbyTheaters"  v-if="finder">
        <div class="content-nearby"  v-for="(nearbyTheater, index) in nearbyTheaters" :key="index">

          <div>
           <div class="location" >

            <p>Street: {{ nearbyTheater.location.address.street1 }}</p>
            <p>City: {{ nearbyTheater.location.address.city }}</p>
            <p>
              State: {{ nearbyTheater.location.address.state }}
              <p>
              zipcode: {{ nearbyTheater.location.address.zipcode }}

              </p>
            </p>
          </div>
          <div class="coordinates">
            
            <p>Lat: {{ nearbyTheater.location.geo.coordinates[0] }}</p>
            <p>Long: {{ nearbyTheater.location.geo.coordinates[0] }}</p>
          </div>
          <Button @click.prevent="closeFindTh">exit</Button>
           

          </div>
        </div>
      </div>
      <div>
 
        <DataTable :value="theaters">
          
          <Column
            v-for="col of columns"
            :field="col.field"
            :header="col.header"
            :key="col.field"
          >
        </Column>
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

         
        </DataTable>
        <div>
        <LeafletVue :theaters="theaters" />
      </div>
      </div>
    </div>    
  
  </div>
</template>
<script>
import TheatersApi from "../../server/theaters-api";
import FormUpdated from "./FormUpdated.vue";
import LeafletVue from "./Leaflet.vue";
import FormCreate from "./FormCreate.vue"
import Modal from './Modal.vue'
import { mapMutations } from "vuex";
const theatersApi = new TheatersApi();

export default {
  props: {
    theater: {
      type: Object
    }
  },
  components: {
    FormUpdated,
    LeafletVue,
    FormCreate,
    Modal
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
      modal: false,
      formCreate: false,
      nearbyTheaters: [],
      finder: false,
      componentNearby: false,
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
      selectTheater: []
    };
  },
  computed: {
    rows() {
      this.theaters.length;
    }
  },
  methods: {
    ...mapMutations({
      setTheaters: "dashboard/setTheaters"
    }),
    closeCreate(){
      this.formCreate = !this.formCreate;
    },
    teste()
    {
      this.FormUpdated = !this.FormUpdated
    },
    onChange(event) {
      this.page = event;
      this.searchTheater();
    },
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },

    async findDistance(theater) {
      this.finder = !this.finder
      this.nearbyTheaters = await this.theatersApi.theaterDistance(theater);
    },
openCreate(){
  this.formCreate = !this.formCreate;
},
    async searchTheater() {
      const result = await this.theatersApi.getTheaters({
        search: this.search,
        page: this.page,
        limit: this.limit
        // type: this.type,
      });
      this.setTheaters(result.numberOfElements)
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
      this.$toast.add({
            severity: "success",
            summary: "Deleted Success",
            life: 3000
          });
     await this.theatersApi.deleteTheater(theather);
    this.$router.push({name: 'Theaters'})
    },
    closeFindTh(){
      this.finder = !this.finder
    }
  },
  mounted() {
    this.searchTheater();
  }
};
</script>
<style scoped>
h3 {
  text-align: center;
}
/* */
.my-form-theaters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90vw;
  height: 90vh;
}

.nearbyTheaters {
  display: flex;
  width: 100%;
  height: 15%;
  background-color: rgb(255, 255, 255);


}

.content-nearby {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
@media (max-width: 600px) {
  .content-theaters {
    display: flex;
    justify-content: center;
  align-items: center;
    max-width: 100%;
    max-height: 80%
  }

  .overflow-auto {
    max-width: 100vw;
  }
  .nearbyTheaters {
    display: flex;
    flex-wrap: wrap;
  }
  .content-nearby {
    flex-wrap: wrap;
  }

}
</style>
